import { elements } from './base';

export const renderItem = item => {
    const markup = `
        <li class="shopping__item" data-itemid=${item.id}>
            <div class="shopping__count">
                <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
                <p>${item.unit}</p>
            </div>
            <p class="shopping__description">${item.ingredient}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const renderDeleteAll = () => {
    const markup = `
    <button class="btn delete__btn">
        <svg class="delete__icon">
            <use href="img/icons.svg#icon-circle-with-cross"></use>
        </svg>
        <span>Delete All Items</span>
    </button>
    `;
    elements.shopping.insertAdjacentHTML('afterend', markup);
}

export const unrenderAllItems = () => {
    while (elements.shopping.firstChild) {
        elements.shopping.removeChild(elements.shopping.firstChild);
    }
}

export const unrenderDeleteAll = () => {
    document.querySelector('.delete__btn').remove();
}

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};

export const clearCustomItemFields = () => {
    elements.ingredientInput.value = '';
    elements.unitInput.value = '';
    elements.quantityInput.value = '';
}