/**
 * @flow
 */
import { useReducer } from 'react';

export type Recipe = {|
    id?: number,
    title: ?string,
    body: ?string,
|};

export type State = {|
    hash: number,
    recipes: Array<Recipe>,
    lastId: number,
|};

function addRecipe(recipes: Array<Recipe>, id: number, content: Recipe): Array<Recipe> {
    return recipes
        .concat({
            ...content,
            id,
        });
}

function editRecipe(recipes: Array<Recipe>, id: number, content: Recipe): Array<Recipe> {
    const index = recipes.findIndex(recipe => recipe.id === id);
    if (index === -1) return recipes;
    return recipes
        .slice(0, index)
        .concat({
            ...content,
            id,
        })
        .concat(
            recipes.slice(index + 1)
        );
}

function removeRecipe(recipes: Array<Recipe>, id: number): Array<Recipe> {
    const index = recipes.findIndex(recipe => recipe.id === id);
    if (index === -1) return recipes;
    return recipes
        .slice(0, index)
        .concat(
            recipes.slice(index + 1)
        );
}

export function reducer(state: State, action: any): State {
    switch (action.type) {
        case 'addRecipe':
            return {
                ...state,
                hash: state.hash + 1,
                recipes: addRecipe(state.recipes, state.lastId + 1, action.content),
                lastId: state.lastId + 1,
            };
        case 'editRecipe':
            if (action.id == null) return state;
            return {
                ...state,
                hash: state.hash + 1,
                recipes: editRecipe(state.recipes, action.id, action.content),
            };
        case 'removeRecipe':
            if (action.id == null) return state;
            return {
                ...state,
                hash: state.hash + 1,
                recipes: removeRecipe(state.recipes, action.id),
            }
        default: throw new Error('unknown action: ' + action.type);
    }
}

export default function RecipesReducer(initState: () => State) {
    return useReducer<State, any, null>(reducer, null, initState);
}