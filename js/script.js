import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import slider from './modules/slider';
import forms from './modules/forms';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    forms('form', modalTimerId);
    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    timer();
    cards();
    calculator();
    slider();
});