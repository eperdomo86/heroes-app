import { authReducer } from "../../../auth/context/authReducer";
import { types } from "../../../auth/types/types";


describe('Pruebas del authReducer', () => { 

    let state;
    const user = {
       name: 'Edward Perdomo',
       id: '123ABC'
    } 

    beforeEach(() => {
        const action = { type: types.login, payload: user}
        state = authReducer(undefined, action);
    });
    
    test('debe de retornar el estado por defecto', () => { 
        const action = { type: ''}
        const state = authReducer(undefined, action);
        expect(state).toEqual({});
    });

    test('debe de (login) llamar al login autenticar y establecer el user', () => {
        expect(state.logged).toBeTruthy();
        expect(state.user).toEqual(user);
    });

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const action = { type: types.logout }
        const state = authReducer(undefined, action);
        expect(state.logged).toBeFalsy();
        expect(state.user).toBeUndefined();
    });
});