const fetchBtc = () => {
    fetch('/api/bitcoin')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(response => btc(response))
        .catch(err => console.error('Fetch error:', err.message));
};



function btc(cripto) {
    const imgBtc = document.getElementById('imagen_btc');
    const nombreBtc = document.getElementById('nombre_btc');
    const valorBtc = document.getElementById('valor_btc');
    const cambioBtc = document.getElementById('cambio_24_btc');

    cripto.map(criptomoneda => {

        let cotizacionCripto = document.createElement('p');
        let nombreCripto = document.createElement('p');
        let cambioCripto = document.createElement('p');
        let valorRedondeado = (criptomoneda.price_change_24h).toFixed(2);
        let porcentaje = (criptomoneda.price_change_percentage_24h).toFixed(2);
        let porcentajeRedondeado = `<span class="fs-3 text-secondary">(${porcentaje}%)</span>`;
        let flechaAbajo = `<i class="bi bi-arrow-down fs-3"></i>`
        let flechaArriba = `<i class="bi bi-arrow-up fs-3"></i>`

        cotizacionCripto.textContent = criptomoneda.current_price + ' USD';
        nombreCripto.textContent = criptomoneda.name;

        if (porcentaje < 0) {
            cambioCripto.style.color = '#d12323';
            cambioCripto.innerHTML = `<p class="text-light fs-3">Cambio en las ultimas 24 hs:</p>${flechaAbajo} ${valorRedondeado} USD ${porcentajeRedondeado}`;
        }
        else {
            cambioCripto.style.color = '#0d8d14';
            cambioCripto.innerHTML = `<p class="text-light fs-3">Cambio en las ultimas 24 hs:</p>${flechaArriba} ${valorRedondeado} USD ${porcentajeRedondeado}`;
        }


        imgBtc.innerHTML = `<img src=${criptomoneda.image} class="logo_criptos_principales">`;
        nombreBtc.appendChild(nombreCripto);
        valorBtc.appendChild(cotizacionCripto);
        cambioBtc.appendChild(cambioCripto);


    })
}

const fetchEth = () => {
    fetch('/api/ethereum')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(response => eth(response))
    .catch(err => console.error('Fetch error:', err.message));
};


function eth(cripto) {

    const imgEth = document.getElementById('imagen_eth');
    const nombreEth = document.getElementById('nombre_eth');
    const valorEth = document.getElementById('valor_eth');
    const cambioEth = document.getElementById('cambio_24_eth');

    cripto.map(criptomoneda => {

        let nombreCripto = document.createElement('p');
        let cotizacionCripto = document.createElement('p');
        let cambioCripto = document.createElement('p');
        let valorRedondeado = (criptomoneda.price_change_24h).toFixed(2);
        let porcentaje = (criptomoneda.price_change_percentage_24h).toFixed(2);
        let porcentajeRedondeado = `<span class="fs-3 text-secondary">(${porcentaje}%)</span>`;
        let flechaAbajo = `<i class="bi bi-arrow-down fs-3"></i>`
        let flechaArriba = `<i class="bi bi-arrow-up fs-3"></i>`

        nombreCripto.textContent = criptomoneda.name;
        cotizacionCripto.textContent = criptomoneda.current_price + ' USD';

        if (porcentaje < 0) {
            cambioCripto.style.color = '#f52d2d';
            cambioCripto.innerHTML = `<p class="text-light fs-3">Cambio en las ultimas 24 hs:</p>${flechaAbajo} ${valorRedondeado} USD ${porcentajeRedondeado}`;
        }
        else {
            cambioCripto.style.color = '#1ab81a';
            cambioCripto.innerHTML = `<p class="text-light fs-3">Cambio en las ultimas 24 hs:</p>${flechaArriba} ${valorRedondeado} USD ${porcentajeRedondeado}`;
        }

        imgEth.innerHTML = `<img src=${criptomoneda.image} class="logo_criptos_principales">`;
        nombreEth.appendChild(nombreCripto);
        valorEth.appendChild(cotizacionCripto);
        cambioEth.appendChild(cambioCripto);

    })
}

const fetchCriptoList = () => {
    fetch('/api/criptolist')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(response => criptoList(response))
    .catch(err => console.error('Fetch error:', err.message));
};

function criptoList(cripto) {

    const listadoCriptos = document.getElementById('listado_criptos');
    let indice = 1;

    cripto.forEach(criptomoneda => {

        let valorRedondeado = (criptomoneda.price_change_24h).toFixed(2);
        let porcentaje = (criptomoneda.price_change_percentage_24h).toFixed(2);
        let flechaAbajo = `<i class="bi bi-arrow-down fs-5"></i>`;
        let flechaArriba = `<i class="bi bi-arrow-up fs-5"></i>`;
        let symbol = `<span class="text-secondary text-uppercase ms-2">${criptomoneda.symbol}</span>`;

        let fila = document.createElement('tr');
        fila.classList.add('criptos')

        let celdaIndex = document.createElement('td');
        celdaIndex.textContent = indice++;
        fila.appendChild(celdaIndex);

        let celdaImgCripto = document.createElement('td');
        celdaImgCripto.innerHTML = `<img src=${criptomoneda.image} class="logo_criptos_lista img-fluid me-3">${criptomoneda.name} ${symbol}`
        fila.appendChild(celdaImgCripto);

        let celdaNombreCripto = document.createElement('td');
        celdaNombreCripto.classList.add('text-center');
        celdaNombreCripto.innerHTML = criptomoneda.current_price;
        fila.appendChild(celdaNombreCripto);

        let celdaValorCripto = document.createElement('td');

        if (porcentaje < 0) {
            celdaValorCripto.style.color = '#f52d2d';
            celdaValorCripto.innerHTML = `${flechaAbajo} ${valorRedondeado} USD (${porcentaje}%)`;
            fila.appendChild(celdaValorCripto);
        }
        else {
            celdaValorCripto.style.color = '#1ab81a';
            celdaValorCripto.innerHTML = `${flechaArriba} ${valorRedondeado} USD (${porcentaje}%)`;
            fila.appendChild(celdaValorCripto);
        }

        let celdaMinCripto = document.createElement('td');
        celdaMinCripto.classList.add('text-center');
        celdaMinCripto.innerHTML = criptomoneda.low_24h;
        fila.appendChild(celdaMinCripto);

        let celdaMaxCripto = document.createElement('td');
        celdaMaxCripto.classList.add('text-center');
        celdaMaxCripto.innerHTML = criptomoneda.high_24h;
        fila.appendChild(celdaMaxCripto);

        let celdaVolumenCripto = document.createElement('td');
        celdaVolumenCripto.textContent = criptomoneda.total_volume;
        fila.appendChild(celdaVolumenCripto);


        listadoCriptos.appendChild(fila);

    });
}

const fetchCriptoExchange = () => {
    fetch('/api/exchanges')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(response => criptoExchange(response))
    .catch(err => console.error('Fetch error:', err.message));
};

function criptoExchange(exchange) {

    const listadoExchanges = document.getElementById('exchange_criptos');

    exchange.forEach(exchanges => {

        let fila = document.createElement('tr');

        let celdaRank = document.createElement('td');
        celdaRank.textContent = exchanges.trust_score_rank;
        fila.appendChild(celdaRank);

        let celdaImgExchange = document.createElement('td');
        celdaImgExchange.innerHTML = `<img src=${exchanges.image} class="logo_criptos_lista img-fluid me-3">${exchanges.name}`
        fila.appendChild(celdaImgExchange);

        let celdaScore = document.createElement('td');
        celdaScore.classList.add('text-center');
        celdaScore.textContent = exchanges.trust_score;
        fila.appendChild(celdaScore);

        let celdaBtc = document.createElement('td');
        let btcOperados24 = (exchanges.trade_volume_24h_btc).toFixed(2);
        celdaBtc.textContent = btcOperados24;
        fila.appendChild(celdaBtc);



        listadoExchanges.appendChild(fila);

    });
}

const fetchCriptoTrend = () => {
    fetch('/api/trendings')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(response => criptoTrend(response.coins))
    .catch(err => console.error('Fetch error:', err.message));
};

function criptoTrend(cripto) {

    const listadoTrends = document.getElementById('trend_criptos');
    let indice = 1;

    cripto.forEach(criptos => {
        if(indice < 11){
        let item = criptos.item;

        let fila = document.createElement('tr');

        let celdaIndice = document.createElement('td');
        celdaIndice.textContent = indice++;
        fila.appendChild(celdaIndice);

        let celdaImgExchange = document.createElement('td');
        celdaImgExchange.innerHTML = `<img src=${item.small} class="logo_criptos_lista img-fluid me-3">${item.name}`
        fila.appendChild(celdaImgExchange);

        let celdaPrice = document.createElement('td');
        let priceFixed = (item.data.price).toFixed(7);
        celdaPrice.innerHTML = priceFixed;
        fila.appendChild(celdaPrice);

        let celdaRank = document.createElement('td');
        celdaRank.classList.add('text-center');
        celdaRank.textContent = item.market_cap_rank;
        fila.appendChild(celdaRank);

        listadoTrends.appendChild(fila);
    }

    });

}

const fetchCriptoEmpresas = () => {
    fetch('/api/companies')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(response => criptoEmpresas(response.companies))
    .catch(err => console.error('Fetch error:', err.message));
};

function criptoEmpresas(empresa) {

    const listadoEmpresas = document.getElementById('listado_companias');
    let indice = 1;

    empresa.forEach(empresas => {
        if(indice < 26){
        let fila = document.createElement('tr');
        fila.classList.add(('empresas'))

        let celdaIndice = document.createElement('td');
        celdaIndice.textContent = indice++;
        fila.appendChild(celdaIndice);

        let celdaImgExchange = document.createElement('td');
        celdaImgExchange.innerHTML = empresas.name
        fila.appendChild(celdaImgExchange);

        let celdaTotalHolding = document.createElement('td');
        celdaTotalHolding.innerHTML = empresas.total_holdings
        fila.appendChild(celdaTotalHolding);


        let celdaPorcentaje = document.createElement('td');
        celdaPorcentaje.textContent = empresas.percentage_of_total_supply;
        fila.appendChild(celdaPorcentaje);

        let celdaPais = document.createElement('td');
        celdaPais.textContent = empresas.country;
        fila.appendChild(celdaPais);

        listadoEmpresas.appendChild(fila);
        }
    });

}

// ACHICAR MENU DEL HTML CUANDO SE HACE SCROLL HACIA ABAJO
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});



// BUSCADOR
document.addEventListener('keyup', e => {

    if (e.target.matches('#buscador_cripto')) {

        if (e.key === 'Escape') e.target.value = "";

        document.querySelectorAll('.criptos').forEach(cripto => {
            cripto.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                ? cripto.classList.remove('filtro')
                : cripto.classList.add('filtro')
        })

    }
})

// BUSCADOR
document.addEventListener('keyup', e => {

    if (e.target.matches('#buscador_empresas')) {

        if (e.key === 'Escape') e.target.value = "";

        document.querySelectorAll('.empresas').forEach(cripto => {
            cripto.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                ? cripto.classList.remove('filtro')
                : cripto.classList.add('filtro')
        })

    }
})

// BOTON PARA SUBIR ARRIBA DE TODO
document.addEventListener('DOMContentLoaded', function() {
    const irArriba = document.getElementById('ir-arriba');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 600) { // Ajusta el valor según cuándo quieras mostrar el botón
            irArriba.classList.add('show');
        } else {
            irArriba.classList.remove('show');
        }
    });

    irArriba.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', fetchBtc);
document.addEventListener('DOMContentLoaded', fetchEth);
document.addEventListener('DOMContentLoaded', fetchCriptoList);
document.addEventListener('DOMContentLoaded', fetchCriptoExchange);
document.addEventListener('DOMContentLoaded', fetchCriptoTrend);
document.addEventListener('DOMContentLoaded', fetchCriptoEmpresas);

