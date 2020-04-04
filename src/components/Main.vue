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
                <a class="nav-link js-scroll-trigger" href="#survey">Encuesta</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#recomendations">Recomendaciones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#phases">Etapas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#download">Descargas</a>
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
          <h3> {{ title }} </h3>
          <br>
          <p>Las siguientes gráficas muestran la información actualizada de <b>{{ lastReviewDate }}</b>. La estimación de casos se basa en un simple método estadístico y tiene como objetivo hacer entender la peligrosidad de este virus si no es controlado a tiempo. Tome todas las medidas necesarias y comparta la información si le parece útil.</p>
          <div class="row text-center">
            <div class="col-12">
              <a href="https://www.facebook.com/sharer/sharer.php?u=http://www.cubacovid19.com/" target="_blank" class="mx-1">
                <img src="/img/facebook.png" alt="Facebook" width="32px" height="32px" data-toggle="tooltip" data-placement="bottom" title="Compartir en Facebook"/>
              </a>
              <a :href="'https://twitter.com/intent/tweet?url=http://www.cubacovid19.com/&text=' + title" target="_blank" class="mx-1">
                <img src="/img/twitter.png" alt="Twitter" width="32px" height="32px" data-toggle="tooltip" data-placement="bottom" title="Compartir en Twitter"/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="cases">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <h2>Desglose de Casos</h2>
              <div class="row">
                <div class="col-12 col-sm-6 col-lg-3 mt-2">
                    <div class="card bg-warning">
                        <div class="card-header text-white">Total de casos</div>
                        <div class="card-body text-white">
                            <h3 class="card-title"><i class="fas fa-check"></i>  
                              <number class="ml-1" ref="totalCases" :from="numberFrom" :to="totalCases" :duration="duration" :delay="delay" :easing="easing"/>
                            </h3>
                          </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-2">
                    <div class="card bg-danger">
                      <div class="card-header text-white">Total de Muertes</div>
                        <div class="card-body text-white">
                            <h3 class="card-title"><i class="fas fa-frown"></i> {{totalDeaths}}
                            </h3>
                          </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-2">
                    <div class="card bg-info">
                      <div class="card-header text-white">Total de Sospechosos</div>
                        <div class="card-body text-white">
                            <h3 class="card-title"><i class="fas fa-user-md"></i> 
                              <number class="ml-1" ref="totalCases" :from="numberFrom" :to="totalSuspicious" :duration="duration" :delay="delay" :easing="easing"/>
                            </h3>
                          </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-2">
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
        <div class="container-fluid">
          <h2>Estadísticas</h2>
          <div class="row">
            <div class="col-12 col-md-6 col-lg-5 ml-lg-auto">
              <div class="card">
                <div class="card-body">
                  <highcharts class="chart" :options="casesPerDayChartOptions"></highcharts>
                </div>
              </div>
              <div id="from_cuba" class="text-center">
                <font size="2"><b>Basado en:</b></font>
                <div>
                  <a href="http://www.acn.cu" target="_blank"><font size="2">Agencia Cubana de Noticias</font></a>
                </div>
                <div>
                  <a href="http://www.cubadebate.cu/?s=covid+cuba+casos" target="_blank"><font size="2">Cubadebate</font></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5 mr-lg-auto">
              <div class="card">
                <div class="card-body">
                  <highcharts :options="casesPerDayEstimationsChartOptions" class="chart"></highcharts>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12 col-md-6 col-lg-5 ml-lg-auto">
                <div class="card">
                  <div class="card-body"> 
                    <highcharts :options="casePerAge"></highcharts>
                  </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5 mr-lg-auto">
              <div class="card">
                <div class="card-body"> 
                  <highcharts :options="casePerSex"></highcharts>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-2">
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <div class="card">
                <div class="card-body">
                  <highcharts :constructor-type="'mapChart'" :options="casePerProvinceOptions" class="map"></highcharts>
                </div>
              </div>
              <div id="from_worl" class="text-center">
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
           <div id="from_worl" class="text-center">
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

      <section id="survey" class="bg-light">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-10 col-lg-8 mx-auto">
              <h2>Encuesta</h2>              
              <form id="survey_form">
                <form-wizard  ref="survey_form" 
                  title="" 
                  subtitle="Esta encuesta es anónima y nuestro sistema no recopila ninguna información brindada por usted."
                  nextButtonText="Siguiente"
                  backButtonText="Anterior"
                  finishButtonText="Finalizar"
                  step-size="xs"
                  color="#20a0ff" 
                  @on-complete="onSurveyComplete">
                   <tab-content>
                      <h5>¿Ha estado viajando al extranjero en las últimas 4 semanas?</h5>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="journey" id="journey_0" value="1">
                          <label class="form-check-label" for="journey_0">
                            Sí
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="journey" id="journey_1" value="0">
                          <label class="form-check-label" for="journey_1">
                            No
                          </label>
                        </div>
                      </div>
                    </tab-content>
                    <tab-content>
                      <h5>¿Ha tenido contacto cercano con un caso confirmado?</h5>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="confirmed" id="confirmed_0" value="1">
                          <label class="form-check-label" for="confirmed_0">
                            Sí
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="confirmed" id="confirmed_1" value="0">
                          <label class="form-check-label" for="confirmed_1">
                            No
                          </label>
                        </div>
                      </div>
                    </tab-content>
                    <tab-content>
                      <h5>¿Ha tenido contacto cercano con un caso sospechoso?</h5>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="suspect" id="suspect_0" value="1">
                          <label class="form-check-label" for="suspect_0">
                            Sí
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="suspect" id="suspect_1" value="0">
                          <label class="form-check-label" for="suspect_1">
                            No
                          </label>
                        </div>
                      </div>
                    </tab-content>
                    <tab-content>
                      <h5>¿Cuántos años tiene?</h5>                    
                      <div class="form-check row">
                        <div class="col-5 col-md-3 m-auto text-left">
                          <input class="form-check-input" type="radio" name="age" id="age_0" value="0">
                          <label class="form-check-label" for="age_0">
                            Menos de 40
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-5 col-md-3 m-auto text-left">
                          <input class="form-check-input" type="radio" name="age" id="age_1" value="1">
                          <label class="form-check-label" for="age_1">
                            Entre 40 y 50
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-5 col-md-3 m-auto text-left">
                          <input class="form-check-input" type="radio" name="age" id="age_2" value="2">
                          <label class="form-check-label" for="age_2">
                            Entre 51 y 60
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-5 col-md-3 m-auto text-left">
                          <input class="form-check-input" type="radio" name="age" id="age_3" value="3">
                          <label class="form-check-label" for="age_3">
                            Entre 61 y 70
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-5 col-md-3 m-auto text-left">
                          <input class="form-check-input" type="radio" name="age" id="age_4" value="4">
                          <label class="form-check-label" for="age_4">
                            Entre 71 y 80
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-5 col-md-3 m-auto text-left">
                          <input class="form-check-input" type="radio" name="age" id="age_5" value="5">
                          <label class="form-check-label" for="age_5">
                            Más de 80
                          </label>
                        </div>
                      </div>
                    </tab-content>
                    <tab-content>
                      <h5>¿Usted fuma?</h5>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="smoke" id="smoke_0" value="1">
                          <label class="form-check-label" for="smoke_0">
                            Sí
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="smoke" id="smoke_1" value="0">
                          <label class="form-check-label" for="smoke_1">
                            No
                          </label>
                        </div>
                      </div>
                    </tab-content>                   
                    <tab-content>
                      <h5>¿Ha tenido síntomas respiratorios en los últimos 14 días?</h5>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="symtoms" id="symtoms_0" value="1">
                          <label class="form-check-label" for="symtoms_0">
                            Sí
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="symtoms" id="symtoms_1" value="0">
                          <label class="form-check-label" for="symtoms_1">
                            No
                          </label>
                        </div>
                      </div>
                    </tab-content>
                    <tab-content>
                      <h5>¿Tiene una enfermedad pulmonar crónica?</h5>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="lungs" id="lungs_0" value="1">
                          <label class="form-check-label" for="lungs_0">
                            Sí
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="lungs" id="lungs_1" value="0">
                          <label class="form-check-label" for="lungs_1">
                            No
                          </label>
                        </div>
                      </div>
                    </tab-content>
                    <tab-content>
                      <h5>¿Tiene diabetes?</h5>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="diabetes" id="diabetes_0" value="1">
                          <label class="form-check-label" for="diabetes_0">
                            Sí
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="diabetes" id="diabetes_1" value="0">
                          <label class="form-check-label" for="diabetes_1">
                            No
                          </label>
                        </div>
                      </div>
                    </tab-content>
                    <tab-content>
                      <h5>¿Tiene una enfermedad cardíaca?</h5>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="hart" id="hart_0" value="1">
                          <label class="form-check-label" for="hart_0">
                            Sí
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="hart" id="hart_1" value="0">
                          <label class="form-check-label" for="hart_1">
                            No
                          </label>
                        </div>
                      </div>
                    </tab-content>
                    <tab-content>
                      <h5>¿Tiene obesidad?</h5>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="obesity" id="obesity_0" value="1">
                          <label class="form-check-label" for="obesity_0">
                            Sí
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="obesity" id="obesity_1" value="0">
                          <label class="form-check-label" for="obesity_1">
                            No
                          </label>
                        </div>
                      </div>
                    </tab-content>
                    <tab-content>
                      <h5>¿Está embarazada?</h5>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="pregnant" id="pregnant_0" value="1">
                          <label class="form-check-label" for="pregnant_0">
                            Sí
                          </label>
                        </div>
                      </div>
                      <div class="form-check row">
                        <div class="col-4 col-md-2 m-auto text-left">
                          <input class="form-check-input" type="radio" name="pregnant" id="pregnant_1" value="0">
                          <label class="form-check-label" for="pregnant_1">
                            No
                          </label>
                        </div>
                      </div>
                    </tab-content>
                </form-wizard>
              </form>
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

      <section id="phases" class="bg-light">
        <div class="container">
          <h2>Etapas</h2>
            <div class="row">
              <div class="col-12 col-md-6 col-lg-4 mt-2">
                  <div class="card bg-info text-white h-100">
                    <div class="card-header">
                      <h5><strong>Fase 1</strong> <i class="fas fa-check-circle" data-toggle="tooltip" data-placement="top" title="Fase actual"></i></h5>
                      <span>Preepidémica</span>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        En esta se notifican casos confirmados de viajeros procedentes de países afectados, o casos locales estrechamente vinculados a los primeros, es decir, que se han producido porque han tenido vínculos o contactos con esos viajeros.
                      </p>
                    </div>
                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mt-2">
                  <div class="card bg-warning text-white h-100">
                    <div class="card-header">
                      <h5><strong>Fase 2</strong></h5>
                      <span>Transmisión autóctona limitada</span>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        Se confirman casos en los cuales no se han podido establecer nexos directos con viajeros procedentes de zonas afectadas. Casi siempre está limitada a conglomerados pequeños, una localidad del país,  una institución o centro en particular.
                      </p>
                    </div>
                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mt-2 mx-auto">
                  <div class="card bg-danger text-white h-100">
                    <div class="card-header">
                      <h5><strong>Fase 3</strong></h5>
                      <span>Epidémica</span>
                      </div>
                    <div class="card-body">
                      <p class="card-text">
                        Es la más compleja. Se detectan y confirman casos sin nexos con viajeros, se incrementan los casos en diferentes localidades del territorio nacional y ocurren picos sostenidos en la curva de la pandemia.
                      </p>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      <section id="download">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <h2>Zona de descargas</h2>
              <div class="list-group">
                <a href="./download/handbook.pdf" download="Manual de Prevención y Tratamiento de COVID-19" class="list-group-item list-group-item-action align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1"><i class="fas fa-file-pdf"></i> Manual de Prevención y Tratamiento de COVID-19</p>
                    <small>4.59 MB</small>
                  </div>
                  <p class="text-muted">Guía informativa sobre la experiencia clínica de cómo tratar este nuevo coronavirus. La guía de tratamientos ofrece consejos y referencias sobre la pandemia al personal médico de todo el mundo que está a punto de unirse a la guerra.</p>
                </a>
                <a href="./download/ibuprofeno.pdf" download="Ibuprofeno y COVID-19" class="list-group-item list-group-item-action align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1"><i class="fas fa-file-pdf"></i> Ibuprofeno y COVID-19</p>
                    <small>246 KB</small>
                  </div>
                  <p class="text-muted">Comunicado respecto de las informaciones surgidas sobre el peligro de usar ibuprofeno en infecciones por COVID-19</p>
                </a>
                <a href="./download/interferon.pdf" download="Interferón e Inmunidad a las Infecciones Virales" class="list-group-item list-group-item-action align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1"><i class="fas fa-file-pdf"></i> Interferón e Inmunidad a las Infecciones Virales</p>
                    <small>133 KB</small>
                  </div>
                  <p class="text-muted">Descripción, historia y mecanismo de acción del interferón.</p>
                </a>
                <a href="./download/interferones_problemas.pdf" download="Eventos-adversos-Interferones-Bogota" class="list-group-item list-group-item-action align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1"><i class="fas fa-file-pdf"></i> Eventos adversos y Problemas relacionados con Interferones en Bogota</p>
                    <small>2.36 MB</small>
                  </div>
                  <p class="text-muted">Eventos adversos y Problemas relacionados con medicamentos Interferones Reportados en Bogota D.C. 2008 – 2007. Trabajo de Grado.</p>
                </a>                
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
import $ from 'jquery'

 
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

const buildSexChartOptions = (m, w) => ({

    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Casos por sexo'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: 'Hombres',
            y: m,
            sliced: true,
            selected: true,
            color: '#7cb5ec'
        }, {
            name: 'Mujeres',
            y: w,
            color: '#f15c80'
        }]
    }]
});

const buildAgeChartOptions = (data_age) => ({

    chart: {
        type: 'bar'
    },
    title: {
        text: 'Distribución por rangos de edad'
    },
    subtitle: {
        text: 'Fuente Minsap'
    },
    xAxis: {
        categories: ['0-18', '19-40', '41-60', '61 o más', 'Desconocido'],
        title: {
            text: 'Rango de edades'
        }
    },
    yAxis: {
        title: {
            text: 'Personas',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Diagnosticados',
        data: data_age,
        color: '#ffff00'
    }],
    colorAxis: [{
        minColor: '#fcff2f',
        maxColor: '#1c584d',
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            }
        }
    }],
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
              casePerSex: {},
              casePerAge: {}
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

      const historic = await getData()
      
      const func = createEvaluationFunc(historic.latest.data.a,historic.latest.data.b)

      const yRealData = historic.history.map(e => e.total)
      const yEstimatedData = []
      const xData = []

      let start_date = new Date(2020, 3, 10);

      for(var i = 1; i <= historic.history.length + 5; i++) {
        yEstimatedData.push(func(i));

        start_date.setDate(start_date.getDate() + 1);
        xData.push(start_date.getDate() + '/' + start_date.getMonth())
      }
      this.casePerProvinceOptions = buildMapChartOptions(data.casePerProvince);
      this.casesPerDayChartOptions = buildChartOptions(xData, yEstimatedData, yRealData);
      this.casesPerDayEstimationsChartOptions = buildChartEstimationsOptions(xData, yEstimatedData, yRealData);
      this.casePerSex = buildSexChartOptions(data.casePerSex.m, data.casePerSex.w);
      this.casePerAge = buildAgeChartOptions(data.casePerAge);
    },
    onSurveyComplete: function() {
      let journey = $('input[name="journey"]:checked').val();
      let confirmed = $('input[name="confirmed"]:checked').val();
      let suspect = $('input[name="suspect"]:checked').val();
      let age = $('input[name="age"]:checked').val();
      let smoke = $('input[name="smoke"]:checked').val();
      let symtoms = $('input[name="symtoms"]:checked').val();
      let lungs = $('input[name="lungs"]:checked').val();
      let diabetes = $('input[name="diabetes"]:checked').val();
      let hart = $('input[name="hart"]:checked').val();
      let obesity = $('input[name="obesity"]:checked').val();
      let pregnant = $('input[name="pregnant"]:checked').val();

      let title = 'Recomendación';
      if (journey == 1 || confirmed == 1 || suspect == 1) {
        this.$swal.fire(
          title,
          'Es recomendable que se haga la prueba del covid-19. Contacte con su centro de salud.',
          'warning'
        );
      } else if (age >= 3 || smoke == 1 || symtoms == 1 || lungs == 1 || diabetes == 1 || hart == 1 || obesity == 1 || pregnant == 1) {
        this.$swal.fire(
          title,
          'Usted está en el grupo de riesgo. Póngase en contacto con su centro de salud.',
          'info'
          );
      } else {
        this.$swal.fire(
          title,
          'No necesita hacerse la prueba del covid-19. Por favor quédese en casa.',
          'success'
          );
      }

      $('#survey_form').trigger("reset");
      this.$refs.survey_form.reset();
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
