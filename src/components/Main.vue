<template>
  <div class="main">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">Inicio</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#cases">Casos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#statistics">Estadísticas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#mask_build">Nasobuco</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#download">Descargar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#recomendations">Recomendaciones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">Acerca de</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="page-top">
        <div class="container">
          <h3> Cuba vs Covid19 </h3>
          <br>
          <p>Las siguientes gráficas muestran la información actualizada de <b>{{ lastReviewDate }}</b>. La estimación de casos se basa en un simple método estadístico y tiene como objetivo hacer entender la peligrosidad de este virus si no es controlado a tiempo. Tome todas las medidas necesarias y comparta la información si le parece útil.</p>
        </div>
      </section>
      <section id="cases">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <h2>Desglose de Casos</h2>
              <div class="row">
                <div class="col-12 col-sm-3 mt-2">
                    <div class="card bg-warning">
                        <div class="card-header text-white">Total de casos</div>
                        <div class="card-body text-white">
                            <h3 class="card-title"><i class="fas fa-check"></i>  
                              <number class="ml-1" ref="totalCases" :from="numberFrom" :to="totalCases" :duration="duration" :delay="delay" :easing="easing"/>
                            </h3>
                          </div>
                    </div>
                </div>
                <div class="col-12 col-sm-3 mt-2">
                    <div class="card bg-danger">
                      <div class="card-header text-white">Total de Muertes</div>
                        <div class="card-body text-white">
                            <h3 class="card-title"><i class="fas fa-frown"></i> {{totalDeaths}}
                            </h3>
                          </div>
                    </div>
                </div>
                <div class="col-12 col-sm-3 mt-2">
                    <div class="card bg-info">
                      <div class="card-header text-white">Total de Sospechosos</div>
                        <div class="card-body text-white">
                            <h3 class="card-title"><i class="fas fa-user-md"></i> 
                              <number class="ml-1" ref="totalCases" :from="numberFrom" :to="totalSuspicious" :duration="duration" :delay="delay" :easing="easing"/>
                            </h3>
                          </div>
                    </div>
                </div>
                <div class="col-12 col-sm-3 mt-2">
                    <div class="card bg-success">
                        <div class="card-header text-white">Total de Recuperados</div>
                        <div class="card-body text-white">
                            <h3 class="card-title"><i class="fas fa-child"></i> {{totalRecovered}}
                            </h3>
                          </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="statistics" class="bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto">              
              <h2>Estadísticas</h2>
              <div class="card">
                <div class="card-body">
                  <highcharts class="chart" :options="casesPerDayChartOptions"></highcharts>
                </div>
              </div>
              <div id="from_cuba" align="left">
                <font size="2"><b>Basado en:</b></font>
                <div>
                  <a href="http://www.acn.cu" target="_blank"><font size="2">Agencia Cubana de Noticias</font></a>
                </div>
                <div>
                  <a href="http://www.cubadebate.cu/?s=covid+cuba+casos" target="_blank"><font size="2">Cubadebate</font></a>
                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <div class="card">
                <div class="card-body">
                  <highcharts :options="casesPerDayEstimationsChartOptions" class="chart"></highcharts>
                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="row">
          <div class="col-lg-12 mx-auto">
            <div class="card">
              <div class="card-body">
                <highcharts :constructor-type="'mapChart'" :options="casePerProvinceOptions" class="map"></highcharts>
              </div>
            </div>
            <div id="from_worl" align="left">
                <font size="2"><b>Basado en:</b></font>
                <div>
                  <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" target="_blank"><font size="2">Global Cases by CSSE at Johns Hopkins University (JHU)</font></a>
                </div>
                <div>
                  <a href="https://www.worldometers.info/coronavirus" target="_blank"><font size="2">World O Meters</font></a>
                </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section id="mask_build">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <h2>¿Cómo hacer un nasobuco casero?</h2>
              <div class="card-deck">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Debe ubicar los siguientes materiales</h5>
                    <div align="left">
                      <ul class="list-group">
                        <li>&#9642; Tres trozos de tela de algodón en forma rectangular, con medidas de 20cm x 26cm. La tela debe ser algodón porque es la más óptima para la esterilización.</li>
                        <li>&#9642; 2 tiras de tela de 86 x 3cm o 2 elásticos para el amarre.</li>
                        <li>&#9642; Aguja, hilo y también tijeras.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body" >
                    <h5 class="card-title">Procedimiento</h5>
                    <div align="left">
                      <ul class="list-group">
                        <li>&#9642; Debe coser los tres trozos de tela en las partes superior e inferior para cerrar el nasobuco y vírelo.</li> 
                        <li>&#9642; Marque el centro por los extremos para fijar los dos pliegues y proceda a coser.</li>
                        <li>&#9642; Precise el centro de las tiras y hágalas coincidir con el centro del lateral para fijarla.</li>
                        <li>&#9642; Deberá rematar la punta del tirante y coserlo hasta el final, haciendo lo mismo con el otro tirante.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br>
           <div class="row">
            <div class="col-lg-12 mx-auto">
              <div class="card-deck">
                  <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Deber ser colocado adecuadamente</h5>
                    <p class="card-text">
                        Lávese bien las manos antes ponerse la mascarilla.
                        Cúbrase la boca y la nariz con la parte más grande y además cerciórese que no haya espacios entre su rostro y la máscara.
                        Ate una de las tiras en la cabeza, a la altura de las orejas, mientras que la otra se ata a la altura del cuello.
                        Evite tocar el nasobuco mientras lo usa o lávese las manos con agua y jabón.
                        Finalmente, al retirarlo trate de no tocarlo por la parte frontal y hágalo con las tiras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
           </div>
           <div id="from_worl" align="left">
              <font size="2"><b>Basado en:</b></font>
              <div>
                <a href="https://www.dimecuba.com/revista/coronavirus-cuba/como-hacer-nasobuco/" target="_blank"><font size="2">Revista Dime Cuba</font></a>
              </div>
              <div>
                <a href="http://www.juventudrebelde.cu/suplementos/asi-de-facil/2020-03-10/como-hacer-un-nasobuco-o-mascarilla-en-casa" target="_blank"><font size="2">Juventud Rebelde</font></a>
              </div>
          </div>
        </div>
      </section>

      <section id="download" class="bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <h2>Zona de descarga</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="recomendations">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <h2>Recomendaciones</h2>
              <div class="card-deck">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Lávese las manos frecuentemente</h5>
                    <p class="card-text">Lávese las manos con frecuencia con un desinfectante de manos a base de alcohol o con agua y jabón.</p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Adopte medidas de higiene respiratoria</h5>
                    <p class="card-text">Al toser o estornudar, cúbrase la boca y la nariz con el codo flexionado o con un pañuelo; tire el pañuelo inmediatamente y lávese las manos con un 
                      desinfectante de manos a base de alcohol, o con agua y jabón.</p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Mantenga el distanciamiento social</h5>
                    <p class="card-text">Mantenga al menos 1 metro de distancia entre usted y las demás personas, particularmente aquellas que tosan, 
                      estornuden y tengan fiebre.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br>
           <div class="row">
            <div class="col-lg-12 mx-auto">
              <div class="card-deck">
                  <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Evite tocarse los ojos, la nariz y la boca</h5>
                    <p class="card-text">Las manos tocan muchas superficies que pueden estar contaminadas con el virus. Si se toca los ojos, la nariz o la boca con las manos
                      contaminadas, puedes transferir el virus de la superficie a si mismo.</p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Si tiene fiebre, tos y dificultad para respirar, solicite atención médica a tiempo</h5>
                    <p class="card-text">Indique a su representante de área de salud si ha viajado a un país en el que se haya notificado la presencia del COVID-19, o si ha tenido 
                      un contacto con alguien que haya viajado y tenga síntomas respiratorios.</p>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </div>
      </section>

      <section id="about" class="bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <h2>Quienes somos</h2>
              <p class="lead">El Grupito es solo eso, un grupito de devs cubanos aportando hoy este grano de arena para ayudar a difundir información que impacte de manera positiva en la prevención y control del COVID-19 en nuestra amada Cuba.</p>
            </div>
          </div>
        </div>
      </section>

      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">Copyright &copy; 2020 <a href = "mailto:elgrupito.cu@gmail.com">El Grupito</a></p>
        </div>
        <!-- /.container -->
      </footer>

  </div>
</template>

<script>

var data = require("../../data.json");
import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import mapInit from 'highcharts/modules/map'
import darkUnica from 'highcharts/themes/dark-unica'
import getData from '../services/service'
import cubaMap from '../maps/cuba'

 
stockInit(Highcharts)
mapInit(Highcharts)
cubaMap(Highcharts)
darkUnica(Highcharts);

Highcharts.setOptions({
    lang: {
            loading: 'Cargando...',
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            exportButtonTitle: "Exportar",
            printButtonTitle: "Importar",
            rangeSelectorFrom: "Desde",
            rangeSelectorTo: "Hasta",
            rangeSelectorZoom: "Período",
            downloadPNG: 'Descargar imagen PNG',
            downloadJPEG: 'Descargar imagen JPEG',
            downloadPDF: 'Descargar imagen PDF',
            downloadSVG: 'Descargar imagen SVG',
            printChart: 'Imprimir',
            resetZoom: 'Reiniciar zoom',
            resetZoomTitle: 'Reiniciar zoom',
            thousandsSep: ",",
            decimalPoint: '.'
        }
});
const createEvaluationFunc = (a,b) => (x) => Math.ceil(a * Math.pow(Math.E, b * x))
const buildMapChartOptions = (casesPerProvince) => ({

                chart: {
                    map: 'cuba'
                },
                title: {
                    text: 'Casos por provincia'
                },
                subtitle: {
                    text: 'Fuente Minsap'
                },
                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },
               colorAxis: {
                min: 0,
                stops: [
                    [0, Highcharts.color('#8B0000').brighten(1).get()],
                    [0.2, Highcharts.color('#8B0000').brighten(0.8).get()],
                    [0.4, Highcharts.color('#8B0000').brighten(0.5).get()],
                    [0.6, Highcharts.color('#8B0000').brighten(0.2).get()],
                    [0.8, Highcharts.color('#8B0000').brighten(0).get()],
                    [1, Highcharts.color('#8B0000').brighten(-0.3).get()]
                ]
            },
                plotOptions: {
                  map: {
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF'
                        }
                  }
                },
                series: [{
                    data: casesPerProvince,
                    name: 'Datos de Cuba',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.value}'
                    }
                }]
});

const buildChartOptions = (xData, yEstimatedData, yRealData) => ({
           
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Casos confirmados'
            },
            subtitle: {
              text: 'Información obtenida del MINSAP'
            },
            xAxis: {
                categories: xData,
                title: {
                  text: 'Fecha'
                },
                labels: {
                  style: {
                      fontSize: '1.2em',
                  }}
            },
            yAxis: {
                title: {
                    text: '# de Casos'
                },
                labels: {
                  style: {
                      fontSize: '1.2em',
                  }}
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline:  {
                  dataLabels: {
                      enabled: true,
                      style: {
                      fontSize: '2em',
                      },
                  },
                  enableMouseTracking: true
              },
            },
            series: [
              {
                name: 'Casos confirmados',
                data: yRealData,
                color: '#FFFF00',
            }]      
});

const buildChartEstimationsOptions = (xData, yEstimatedData, yRealData) => ({
           
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Casos confirmados & Casos estimados'
            },
            subtitle: {
              text: 'Los datos estimados son una predicción estadística basados en los casos confirmados'
            },
            xAxis: {
                categories: xData,
                title: {
                  text: 'Fecha'
                },
                labels: {
                  style: {
                      fontSize: '1.2em',
                  }}
            },
            yAxis: {
                title: {
                    text: '# Casos'
                },
                labels: {
                  style: {
                      fontSize: '1.2em',
                  }}
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline:  {
                  dataLabels: {
                      enabled: true,
                      style: {
                      fontSize: '2em',
                      },
                  },
                  enableMouseTracking: true
              },
            },
            series: [{
                name: 'Estimados',
                data: yEstimatedData,
                color: '#8B0000'

            }, {
                name: 'Confirmados',
                data: yRealData,
                color: '#FFFF00',
            }]      
});

export default {
  name: 'Main',
  
  data() {
        return {
              totalCases: 0,
              totalDeaths: 0, 
              totalSuspicious: 0,
              totalRecovered: 0,
              lastReviewDate: null,
              casePerProvinceOptions: {},
              casesPerDayChartOptions: {},
              casesPerDayEstimationsChartOptions: {},
              numberFrom: 0,
              duration: 3,
              delay: 1,
              easing: 'Power0.easeNone',
              sex: {}
          }
  },
  components: {
    highcharts: Chart 
  },
  beforeMount: async function (){
     await this.getInitialData();
  },
  
  methods: {
    
    async getInitialData() {
      
      this.totalCases = data.totalCases;
      this.totalDeaths = data.totalDeaths;
      this.totalSuspicious = data.totalSuspicious;
      this.totalRecovered = data.totalRecovered;
      this.lastReviewDate = data.lastReviewDate;
      this.sex = data.sex;

      const historic = await getData()
      
      const func = createEvaluationFunc(historic.latest.data.a,historic.latest.data.b)

      const yRealData = historic.history.map(e => e.total)
      const yEstimatedData = []
      const xData = []

      let start_date = new Date(2020, 3, 10);

      for(var i = 1; i <= historic.history.length + 8; i++) {
        yEstimatedData.push(func(i));

        start_date.setDate(start_date.getDate() + 1);
        xData.push(start_date.getDate() + '/' + start_date.getMonth())
      }
      this.casePerProvinceOptions = buildMapChartOptions(data.casePerProvince);
      this.casesPerDayChartOptions = buildChartOptions(xData, yEstimatedData, yRealData);
      this.casesPerDayEstimationsChartOptions = buildChartEstimationsOptions(xData, yEstimatedData, yRealData);
    }
  },
  computed: {
    deathRate: function() {
      return this.totalcases / this.totaldeaths;
    }
  },
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 5px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
