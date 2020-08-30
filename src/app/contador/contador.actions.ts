import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[Contador] incrementar');
export const decrementar = createAction('[Contador] decrementar');
export const multiplicar = createAction(
    '[Contador] multiplicar',
    props<{ numero: number }>()
);
export const dividir = createAction(
    '[Contador] dividir',
    props<{ numero: number }>()
);
export const reset = createAction('[Contador] reset');
