import { types } from "../../../src/auth/types/types";



describe('pruebas en types', () => { 

    test('debe de tener estos types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });
    });

})