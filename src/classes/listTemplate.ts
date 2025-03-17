import { hasFormatter } from '../interfaces/hasFormatter.js';
type pos = 'start' | 'end';
export class ListTemplate {

    constructor(
        private readonly container: HTMLUListElement
    ) { }


    public render(options: {item: hasFormatter, heading: string, position: pos}) {
        const {item, heading, position} = options
        const li = this.createLI(item, heading);
        this.addItem(position, li);
    }


    private createLI(item: hasFormatter, heading: string): HTMLLIElement{

        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        h4.innerText = heading;
        p.innerText = item.format()
        li.append(h4);
        li.append(p);
        return li;

    }

    private addItem(position: pos, li: HTMLLIElement): void {
        if (position === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }

    }
}