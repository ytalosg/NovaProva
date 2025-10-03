const carros = {
    esportivos: [
        {
            marca: 'Ferrari',
            modelo: '488 GTB',
            precos: ['R$ 2.500.000', 'R$ 2.700.000', 'R$ 2.900.000']
        },
        {
            marca: 'Lamborghini',
            modelo: 'Huracán EVO',
            precos: ['R$ 2.800.000', 'R$ 3.000.000', 'R$ 3.200.000']
        },
        {
            marca: 'Porsche',
            modelo: '911 Turbo S',
            precos: ['R$ 1.600.000', 'R$ 1.800.000', 'R$ 2.000.000']
        }
    ],
    populares: [
        {
            marca: 'Fiat',
            modelo: 'Mobi',
            precos: ['R$ 60.000', 'R$ 65.000', 'R$ 70.000']
        },
        {
            marca: 'Volkswagen',
            modelo: 'Gol',
            precos: ['R$ 75.000', 'R$ 80.000', 'R$ 85.000']
        },
        {
            marca: 'Renault',
            modelo: 'KwID',
            precos: ['R$ 68.000', 'R$ 72.000', 'R$ 76.000']
        }
    ],
    comuns: [
        {
            marca: 'Toyota',
            modelo: 'Corolla',
            precos: ['R$ 140.000', 'R$ 150.000', 'R$ 160.000']
        },
        {
            marca: 'Honda',
            modelo: 'Civic',
            precos: ['R$ 130.000', 'R$ 140.000', 'R$ 150.000']
        },
        {
            marca: 'Chevrolet',
            modelo: 'Cruze',
            precos: ['R$ 120.000', 'R$ 130.000', 'R$ 140.000']
        }
    ]
};

function renderCarros(tipo, containerId) {
    const container = document.getElementById(containerId);
    carros[tipo].forEach(carro => {
        const div = document.createElement('div');
        div.className = 'car';
        div.innerHTML = `
            <h3>${carro.marca} - ${carro.modelo}</h3>
            <ul>
                <li>Preço 1: ${carro.precos[0]}</li>
                <li>Preço 2: ${carro.precos[1]}</li>
                <li>Preço 3: ${carro.precos[2]}</li>
            </ul>
        `;
        container.appendChild(div);
    });
}

renderCarros('esportivos', 'carros-esportivos');
renderCarros('populares', 'carros-populares');
renderCarros('comuns', 'carros-comuns');
