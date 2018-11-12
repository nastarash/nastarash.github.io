export default class CheckBox {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    cretateCheckBox() {
        return `<div class="form-check">
        <label class="form-check-label">
        <input class="form-check-input" type="checkbox" value=${this.id}>${this.name}
        </label>
        </div>`;
    }
}
