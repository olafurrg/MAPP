import update from 'immutability-helper';
import { boards } from '../../resources/data.json';


let boardMap = {};
let maxId = 0;
boards.map((obj) => {
  if (obj.id > maxId) {
    maxId = obj.id;
  }
  boardMap[obj.id] = obj;
});

const initialState = { boards: boardMap, maxId };

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
      boards: { [maxId]: { $set: newBoard } },
      maxId: newMaxId,
    });
  }

  if (type === 'DELETE') {
    const { id } = payload;
    const { boards } = state;
    const newBoards = { ...boards };
    delete newBoards[id];
    return update(state, {
      boards: { $set: newBoards },
    });
  }

  if (type === 'UPDATE') {
    const { id, name, thumbnailPhoto } = payload;
    const { boards } = state;
    const updatedBoard = { ...boards[id] };
    if (typeof name !== 'undefined') {
      updatedBoard.name = name;
    }
    if (typeof thumbnailPhoto !== 'undefined') {
      updatedBoard.thumbnailPhoto = thumbnailPhoto;
    }
    return update(state, {
      boards: { [id]:  { $set: updatedBoard } },
    });
  }

  return state;
};

export { reducer, initialState, action };
