const apiKey = 'CG-YUaZs4DtjnyZJsnxdb9jCPmN';


function fetchBtc() {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey }
    };

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&precision=2', options)
        .then(response => response.json())
        .then(response => btc(response))
        .catch(err => console.error(err));
}


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
            cambioCripto.style.color = '#1ab81a';
            cambioCripto.innerHTML = `<p class="text-light fs-3">Cambio en las ultimas 24 hs:</p>${flechaArriba} ${valorRedondeado} USD ${porcentajeRedondeado}`;
        }


        imgBtc.innerHTML = `<img src=${criptomoneda.image} class="logo_criptos_principales">`;
        nombreBtc.appendChild(nombreCripto);
        valorBtc.appendChild(cotizacionCripto);
        cambioBtc.appendChild(cambioCripto);


    })
}

function fetchEth() {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey }
    };

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&precision=2', options)
        .then(response => response.json())
        .then(response => eth(response))
        .catch(err => console.error(err));
}


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



function fetchCriptoTrendTopTres() {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey }
    };

    fetch('https://api.coingecko.com/api/v3/search/trending', options)
        .then(response => response.json())
        .then(response => criptoTrendTop3(response.coins))
        .catch(err => console.error(err));
}


function criptoTrendTop3(cripto) {

    const top3 = document.getElementById('top-3');
    let indice = 1;

    cripto.forEach(criptos => {

        if (indice < 5) {

            let item = criptos.item;

            let divPadreTopTres = document.createElement('div');
            divPadreTopTres.classList.add('top_3', 'bg-dark', 'text-light', 'col-12', 'col-sm-5', 'text-center', 'fs-3');


            let divImage = document.createElement('div');
            let divValorTopTres = document.createElement('div');
            let divMarketCapTopTres = document.createElement('div');
            let divVolumeTopTres = document.createElement('div');

            divImage.innerHTML = `<div class="pb-4"><img src=${item.thumb} class="img-fluid me-4"/><span class="fs-1">${item.name}</span> <span class='text-secondary fs-5 ps-1'>${item.symbol}</span></div>`;
            divPadreTopTres.appendChild(divImage);

            let porcentajeFixed = (item.data.price_change_percentage_24h.usd).toFixed(2);
            

            if(item.data.price > 1){
               

            if (porcentajeFixed < 0) {

                let priceFixed = (item.data.price).toFixed(2);
                let divPadre = document.createElement('div')
                divPadre.classList.add('d-flex','flex-wrap','justify-content-evenly');
                let divValor = document.createElement('div');
                let divPorcentaje = document.createElement('div');
                divValor.innerHTML = `${priceFixed}<span class="text-secondary ps-2 gap-1">USD</span> `;
                divPorcentaje.innerHTML = `<span class="top_3_porcentaje_rojo">${porcentajeFixed} %</span>`;
                divPadre.appendChild(divValor);
                divPadre.appendChild(divPorcentaje);
                divPadreTopTres.appendChild(divPadre);

            }
            else {
                let priceFixed = (item.data.price).toFixed(2);
                let divPadre = document.createElement('div')
                divPadre.classList.add('d-flex','flex-wrap','justify-content-evenly');
                let divValor = document.createElement('div');
                let divPorcentaje = document.createElement('div');
                divValor.innerHTML = `${priceFixed}<span class="text-secondary ps-2 gap-1">USD</span> `;
                divPorcentaje.innerHTML = `<span class="top_3_porcentaje_verde">${porcentajeFixed} %</span>`;
                divPadre.appendChild(divValor);
                divPadre.appendChild(divPorcentaje);
                divPadreTopTres.appendChild(divPadre);
            }
        }
        else{
            if (porcentajeFixed < 0) {

                let priceFixed = (item.data.price).toFixed(8);
                let divPadre = document.createElement('div')
                divPadre.classList.add('d-flex','flex-wrap','justify-content-evenly');
                let divValor = document.createElement('div');
                let divPorcentaje = document.createElement('div');
                divValor.innerHTML = `${priceFixed}<span class="text-secondary ps-2 gap-1">USD</span> `;
                divPorcentaje.innerHTML = `<span class="top_3_porcentaje_rojo">${porcentajeFixed} %</span>`;
                divPadre.appendChild(divValor);
                divPadre.appendChild(divPorcentaje);
                divPadreTopTres.appendChild(divPadre);

            }
            else {
                let priceFixed = (item.data.price).toFixed(8);
                let divPadre = document.createElement('div')
                divPadre.classList.add('d-flex','flex-wrap','justify-content-evenly');
                let divValor = document.createElement('div');
                let divPorcentaje = document.createElement('div');
                divValor.innerHTML = `${priceFixed}<span class="text-secondary ps-2 gap-1">USD</span> `;
                divPorcentaje.innerHTML = `<span class="top_3_porcentaje_verde">${porcentajeFixed} %</span>`;
                divPadre.appendChild(divValor);
                divPadre.appendChild(divPorcentaje);
                divPadreTopTres.appendChild(divPadre);
            }
        }

            divMarketCapTopTres.innerHTML = `<span class="fw-bold pe-3">Market cap:</span> ${item.data.market_cap}`;
            divMarketCapTopTres.classList.add('pt-4');
            divPadreTopTres.appendChild(divMarketCapTopTres);

            divVolumeTopTres.innerHTML = `<span class="fw-bold pe-3">Volumen total:</span> ${item.data.total_volume}`;
            divVolumeTopTres.classList.add('pt-3');
            divPadreTopTres.appendChild(divVolumeTopTres);

            top3.appendChild(divPadreTopTres);
            indice++;


        }

    });

}




function fetchCriptoTrend() {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey }
    };

    fetch('https://api.coingecko.com/api/v3/search/trending', options)
        .then(response => response.json())
        .then(response => criptoTrend(response.coins))
        .catch(err => console.error(err));
}

function criptoTrend(cripto) {

    const listadoTrends = document.getElementById('trend_criptos');
    let indice = 1;

    cripto.forEach(criptos => {

        if (indice < 11) {

            let item = criptos.item;
            let porcentajeFixed = (item.data.price_change_percentage_24h.usd)
            let flechaAbajo = `<i class="bi bi-arrow-down fs-5"></i>`;
            let flechaArriba = `<i class="bi bi-arrow-up fs-5"></i>`;
            let symbol = `<span class="text-secondary text-uppercase ms-2">${item.symbol}</span>`;
            
            let fila = document.createElement('tr');

            let celdaIndice = document.createElement('td');
            celdaIndice.textContent = indice++;
            fila.appendChild(celdaIndice);

            let celdaImgExchange = document.createElement('td');
            celdaImgExchange.innerHTML = `<img src=${item.small} class="logo_criptos_lista img-fluid me-3">${item.name} <span class="text-secondary">${item.symbol}</span>`
            fila.appendChild(celdaImgExchange);

            if(item.data.price > 1){

            if (porcentajeFixed < 0) {
           
                let celdaPrice = document.createElement('td');
                let priceFixed = (item.data.price).toFixed(2);
                celdaPrice.innerHTML = `${priceFixed} <span style="color: #f52d2d">${flechaAbajo} (${porcentajeFixed.toFixed(2)}%)</span>`;
                fila.appendChild(celdaPrice);
       
            }
            else {
                let celdaPrice = document.createElement('td');
                let priceFixed = (item.data.price).toFixed(2);
                celdaPrice.innerHTML = `${priceFixed} <span style="color: #1ab81a">${flechaArriba} (${porcentajeFixed.toFixed(2)}%)</span>`;
                fila.appendChild(celdaPrice);
            }
        }
        else{
            if (porcentajeFixed < 0) {
           
                let celdaPrice = document.createElement('td');
                let priceFixed = (item.data.price).toFixed(8);
                celdaPrice.innerHTML = `${priceFixed} <span style="color: #f52d2d">${flechaAbajo} (${porcentajeFixed.toFixed(2)}%)</span>`;
                fila.appendChild(celdaPrice);
       
            }
            else {
                let celdaPrice = document.createElement('td');
                let priceFixed = (item.data.price).toFixed(8);
                celdaPrice.innerHTML = `${priceFixed} <span style="color: #1ab81a">${flechaArriba} (${porcentajeFixed.toFixed(2)}%)</span>`;
                fila.appendChild(celdaPrice);
            }
        }

            let celdaMarketCap = document.createElement('td');
    
            celdaMarketCap.textContent = item.data.market_cap;
            fila.appendChild(celdaMarketCap);

            let celdaTotalVol = document.createElement('td');
            celdaTotalVol.classList.add('text-center');
            celdaTotalVol.textContent = item.data.total_volume;
            fila.appendChild(celdaTotalVol);

            let celdaRank = document.createElement('td');
            celdaRank.classList.add('text-center');
            celdaRank.textContent = item.market_cap_rank;
            fila.appendChild(celdaRank);

            listadoTrends.appendChild(fila);

        }


    });

}


function fetchCriptoExchange() {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey }
    };

    fetch('https://api.coingecko.com/api/v3/exchanges?per_page=10', options)
        .then(response => response.json())
        .then(response => criptoExchange(response))
        .catch(err => console.error(err));
}

function criptoExchange(exchange) {

    const listadoExchanges = document.getElementById('exchange_criptos');

    exchange.forEach(exchanges => {

        let fila = document.createElement('tr');

        let celdaRank = document.createElement('td');
        celdaRank.textContent = exchanges.trust_score_rank;
        fila.appendChild(celdaRank);

        let celdaImgExchange = document.createElement('td');
        celdaImgExchange.innerHTML = exchanges.name
        fila.appendChild(celdaImgExchange);


        let celdaPais = document.createElement('td');
        celdaPais.textContent = exchanges.country;
        fila.appendChild(celdaPais);

        let celdaAno = document.createElement('td');
        celdaAno.textContent = exchanges.year_established;
        fila.appendChild(celdaAno);

        let celdaScore = document.createElement('td');
        celdaScore.classList.add('text-center');
        celdaScore.textContent = exchanges.trust_score;
        fila.appendChild(celdaScore);

        let celdaBtc = document.createElement('td');
        let btcOperados24 = (exchanges.trade_volume_24h_btc).toFixed(2);
        celdaBtc.textContent = btcOperados24;
        fila.appendChild(celdaBtc);

        let filteredName = exchanges.name.replace(/exchange/i, '').trim();
        let celdaWebsite = document.createElement('td');
        celdaWebsite.innerHTML = `<a class="text-primary text-decoration-none" href="${exchanges.url}" target='_blank'>${filteredName}</a>`;
        fila.appendChild(celdaWebsite);



        listadoExchanges.appendChild(fila);

    });
}



function fetchCriptoList() {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey }
    };

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
        .then(response => response.json())
        .then(response => criptoList(response))
        .catch(err => console.error(err));
}


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




function fetchCriptoEmpresas() {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey }
    };

    fetch('https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin', options)
        .then(response => response.json())
        .then(response => criptoEmpresas(response.companies))
        .catch(err => console.error(err));
}

function criptoEmpresas(empresa) {

    const listadoEmpresas = document.getElementById('listado_companias');
    let indice = 1;

    empresa.forEach(empresas => {
        if (indice < 26) {
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
window.addEventListener('scroll', function () {
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
document.addEventListener('DOMContentLoaded', function () {
    const irArriba = document.getElementById('ir-arriba');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 600) { // Ajusta el valor según cuándo quieras mostrar el botón
            irArriba.classList.add('show');
        } else {
            irArriba.classList.remove('show');
        }
    });

    irArriba.addEventListener('click', function () {
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
document.addEventListener('DOMContentLoaded', fetchCriptoTrendTopTres);