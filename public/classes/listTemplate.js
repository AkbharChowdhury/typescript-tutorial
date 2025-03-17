export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(options) {
        const { item, heading, position } = options;
        const li = this.createLI(item, heading);
        this.addItem(position, li);
    }
    createLI(item, heading) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        h4.innerText = heading;
        p.innerText = item.format();
        li.append(h4);
        li.append(p);
        return li;
    }
    addItem(position, li) {
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
