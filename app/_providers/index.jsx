import compose from 'compose-function';
import withQueryClient from './withQueryClient';

export const withProviders = compose(withQueryClient);