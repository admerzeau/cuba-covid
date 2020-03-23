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
                <a class="nav-link js-scroll-trigger" href="#statistics">Estadística</a>
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
                            <h3 class="card-title"><i class="fas fa-check"></i> {{totalCases}}</h3>
                           
                          </div>
                    </div>
                </div>
                <div class="col-12 col-sm-3 mt-2">
                    <div class="card bg-danger">
                      <div class="card-header text-white">Total de Muertes</div>
                        <div class="card-body text-white">
                            <h3 class="card-title"><i class="fas fa-frown"></i> {{totalDeaths}}</h3>
                          </div>
                    </div>
                </div>
                <div class="col-12 col-sm-3 mt-2">
                    <div class="card bg-info">
                      <div class="card-header text-white">Total de Sospechosos</div>
                        <div class="card-body text-white">
                            <h3 class="card-title"><i class="fas fa-user-md"></i> {{totalSuspicious}}</h3>
                          </div>
                    </div>
                </div>
                <div class="col-12 col-sm-3 mt-2">
                    <div class="card bg-success">
                        <div class="card-header text-white">Total de Recuperados</div>
                        <div class="card-body text-white">
                            <h3 class="card-title"><i class="fas fa-child"></i> {{totalRecovered}}</h3>
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
              <div class="card">
              <div class="card-body">
                 <highcharts :constructor-type="'stockChart'" :options="casesPerDayChartOptions"></highcharts>
              </div>
            </div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <div class="card">
              <div class="card-body">
                  <highcharts :constructor-type="'mapChart'" :options="casePerProvinceOptions" class="map" ></highcharts>
              </div>
            </div>
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
                    <p class="card-text">Mantenga al menos 1 metro (3 pies) de distancia entre usted y las demás personas, particularmente aquellas que tosan, 
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
          <p class="m-0 text-center text-white">Copyright &copy; 2020 El Grupito</p>
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
import getData from '../services/service'
import cubaMap from '../maps/cuba'

 
stockInit(Highcharts)
mapInit(Highcharts)
cubaMap(Highcharts)

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
                    min: 0
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
                        format: '{point.name}'
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
            xAxis: {
                categories: xData
            },
            yAxis: {
                title: {
                    text: 'Casos'
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                }
            },
            series: [{
                name: 'Estimado',
                data: yEstimatedData

            }, {
                name: 'Real',
                data: yRealData
            }]      
});


const createEvaluationFunc = (a,b) => (x) => Math.ceil(a * Math.pow(Math.E, b * x))

const buildChart = (xData, yEstimatedData, yRealData) => ({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Casos confirmados'
            },
            xAxis: {
                categories: xData
            },
            yAxis: {
                title: {
                    text: 'Casos'
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                }
            },
            series: [{
                name: 'Estimado',
                data: yEstimatedData

            }, {
                name: 'Real',
                data: yRealData
            }]
        })

export default {
  name: 'Main',
  
  data() {
        return {
              totalCases: 0,
              totalDeaths: 0, 
              totalSuspicious: 0,
              totalRecovered: 0,

              casePerProvinceOptions: {},
              casesPerDayChartOptions: {},
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

      const historic = await getData()
      
      const func = createEvaluationFunc(historic.latest.data.a,historic.latest.data.b)

      const yRealData = historic.history.map(e => e.total)
      const yEstimatedData = []
      const xData = []

      let start_date = new Date(2020, 3, 10);

      for(var i = 1; i <= 15; i++) {
        yEstimatedData.push(func(i));

        start_date.setDate(start_date.getDate() + 1);
        xData.push(start_date.getDate() + '/' + start_date.getMonth())
      }
      this.casePerProvinceOptions = buildMapChartOptions(data.casePerProvince);
      this.casesPerDayChartOptions = buildChartOptions(xData, yEstimatedData, yRealData);
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
