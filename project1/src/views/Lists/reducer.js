import update from 'immutability-helper';
import { lists } from '../../resources/data.json';

let boards = {};
lists.map((obj) => {
  if (typeof boards[obj.boardId] === 'undefined') {
    boards[obj.boardId] = {};
  }
  boards[obj.boardId][obj.id] = obj;
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
