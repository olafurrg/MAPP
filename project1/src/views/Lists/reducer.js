import update from 'immutability-helper';
import { lists, tasks } from '../../resources/data.json';

let listTasks = {};
let boards = {};
tasks.map((task) => {
  if (typeof listTasks[task.listId] === 'undefined') {
    listTasks[task.listId] = {};
  }
  listTasks[task.listId][task.id] = task;
});
lists.map((list) => {
  if (typeof boards[list.boardId] === 'undefined') {
    boards[list.boardId] = { lists: {}, listOrder: []};
  }
  boards[list.boardId].lists[list.id] = list;
  boards[list.boardId].lists[list.id].tasks = listTasks[list.id];
  boards[list.boardId].lists[list.id].taskOrder = Object.keys(listTasks[list.id]);
  boards[list.boardId].listOrder.push(list.id);
});
const initialState = { boards };

const action = {
  CREATE: 'CREATE',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE'
};

const reducer = (state, { type, payload }) => {
  if (type === 'CREATE') {
    const { name, thumbnailPhoto } = payload;
    const { maxId } = state;
    const newMaxId = maxId + 1;
    const newBoard = {
      id: newMaxId,
      name,
      thumbnailPhoto,
    };
    return update(state, {
      boards: { $push: [newBoard] },
      maxId: newMaxId,
    });
  }

  if (type === 'DELETE') {
    const { id } = payload;
    const { boards } = state;
    const newBoards = boards.filter(board => board.id != id);
    return update(state, {
      boards: { $set: newBoards },
    });
  }

  if (type === 'UPDATE') {
    const { id, name, thumbnailPhoto } = payload;
    const { boards } = state;
    let boardIndex = 0;
    const updatedBoard = { ...boards.find((board, index) => {
      if (board.id === id) {
        boardIndex = index;
        return true;
      }
      return false;
    }) };
    if (typeof name !== 'undefined') {
      updatedBoard.name = name;
    }
    if (typeof thumbnailPhoto !== 'undefined') {
      updatedBoard.thumbnailPhoto = thumbnailPhoto;
    }
    return update(state, {
      boards: { [boardIndex]:  { $set: updatedBoard } },
    });
  }

  return state;
};

export { reducer, initialState, action };
