/**
 * Decorator for RecipesReducer that loads and saves state from local storage
 * 
 * @flow
 */
import type { State } from './RecipesReducer';

import { useEffect } from 'react';
import RecipesReducer from './RecipesReducer';

const LOCAL_STORAGE_KEY = 'myRecipesState';

function initState() {
    console.log('loading');
    let loadedState = localStorage.getItem(LOCAL_STORAGE_KEY) || '';
    try {
        loadedState = JSON.parse(loadedState);
    } catch (e) {
        loadedState = null;
    }
    return loadedState || {hash: 0, lastId: 0, recipes: []};
}

function saveState(state: State) {
    console.log('saving: ', state.hash);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
}

function LocalStorageReducer() {
    const [state, dispatch] = RecipesReducer(initState);

    useEffect(() => {
        console.log("useEffect");
        saveState(state);
    }, [state]);

    return [state, dispatch];
}

export default LocalStorageReducer;