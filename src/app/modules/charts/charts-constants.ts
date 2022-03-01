export class ChartsConstants {
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
            width: '40%'
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