export class ChartsConstants {
    public readonly colors: Array<any> = [
        { value: '#ffc94d', title: 'Amarillo' },
        { value: '#42aaff', title: 'Celeste' },
        { value: '#ff708d', title: 'Rojo' },
        { value: '#2ce69b', title: 'Verde' },
        { value: '#598bff', title: 'Azul' },
    ];
    public readonly CHARTS_COLUMNS: any = {
        name: {
            title: 'Nombre',
            type: 'string',
            filter: false,
            width: '50%'
        },
        value: {
            title: 'Valor',
            type: 'number',
            filter: false,
            width: '10%'
        },
        color: {
            title: 'Color',
            type: 'string',
            filter: false,
            width: '40%',
            /*valuePrepareFunction: (value) => {
                return this.colors.find(c => c.value == value).title;
            },*/
            editor: {
                type: 'list',
                config: {
                    selectText: 'Select...',
                    list: this.colors,
                }
            }
        }
    };

    public readonly CHARTS_TABLE_ACTIONS: any =
        {
            position: "right",
            add: true,
            edit: true,
            delete: true
        };
    constructor() { }
}