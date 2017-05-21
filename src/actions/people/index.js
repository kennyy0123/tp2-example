// @flow
import { ADD, REMOVE } from '../../reducers/people';

export const add = (name: string) => ({ type: ADD, name });
export const remove = (id: number) => ({ type: REMOVE, id });