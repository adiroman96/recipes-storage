/**
 * @flow
 */
import type {Node} from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import AddCard from './AddCard';
import RecipeCard from './RecipeCard';
import LocalStorageReducer from './LocalStorageReducer';

function RecipesContainer(): Node {
    const [state, dispatch] = LocalStorageReducer();
    
    return (
        <>
            <Container >
                <Row className="justify-content-md-center" >
                {state.recipes.map(item => 
                    <Col xs="12" sm="12" md="6" lg="4" xl="4" key={item.id}>
                        <RecipeCard
                            content={item}
                            update={(recipe) => dispatch({
                                type: 'editRecipe',
                                id: item.id,
                                content: recipe,
                            })}
                            remove={() => dispatch({
                                type: 'removeRecipe',
                                id: item.id,
                            })}
                            />
                    </Col>
                )}
                <Col xs="12" sm="12" md="6" lg="4" xl="4" key="add-button">
                    <AddCard onClick={() => dispatch({
                        type: 'addRecipe',
                        content: {
                            title: 'New Recipe',
                            body: '',
                        }
                    })}/>
                </Col>
                </Row>
            </Container>
        </>

    );
}

export default RecipesContainer;