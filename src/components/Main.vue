<template>
  <div class="main">
    <h1>{{ msg }}</h1>
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
            </ul>
          </div>
        </div>
      </nav>

      <header class="bg-primary text-white">
        <div class="container text-center">
          <h1>Coronavirus COVID-19</h1>
          <p class="lead">Reportes estadísticos del virus en Cuba</p>
        </div>
      </header>

      <section id="cases">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <h2>Casos reportados</h2>
              <div class="row">
                <div class="col-12 col-sm-4 mt-2">
                    <div class="card bg-danger">
                        <div class="card-body text-white">
                            <h3 class="card-title"><i class="fas fa-check"></i> 35</h3>
                            <p class="card-text">Confirmados</p>
                          </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4 mt-2">
                    <div class="card bg-warning">
                        <div class="card-body">
                            <h3 class="card-title"><i class="fas fa-hospital"></i> 489</h3>
                            <p class="card-text">Sospechosos</p>
                          </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4 mt-2">
                    <div class="card bg-info">
                        <div class="card-body">
                            <h3 class="card-title"><i class="fas fa-user-md"></i> 30773</h3>
                            <p class="card-text">Vigilados</p>
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
            <div class="col-lg-10 mx-auto">
              <h2>Estadística</h2>
              <p class="lead">Generar gráfica con los datos del backend.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="recomendations">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <h2>Recomendaciones</h2>
              <div class="content-block">
                    <h5>Lávese las manos frecuentemente</h5>
                    <p class="text-justify">Lávese las manos con frecuencia con un desinfectante de manos a base de alcohol o con agua y jabón.</p>

                    <h5>Adopte medidas de higiene respiratoria</h5>
                    <p class="text-justify">Al toser o estornudar, cúbrase la boca y la nariz con el codo flexionado o con un pañuelo; tire el pañuelo inmediatamente y lávese las manos con un 
                      desinfectante de manos a base de alcohol, o con agua y jabón.</p>               

                    <h5>Mantenga el distanciamiento social</h5>
                    <p class="text-justify">Mantenga al menos 1 metro (3 pies) de distancia entre usted y las demás personas, particularmente aquellas que tosan, 
                      estornuden y tengan fiebre.</p>

                    <h5>Evite tocarse los ojos, la nariz y la boca</h5>
                    <p class="text-justify">Las manos tocan muchas superficies que pueden estar contaminadas con el virus. Si se toca los ojos, la nariz o la boca con las manos
                      contaminadas, puedes transferir el virus de la superficie a si mismo.</p>

                    <h5>Si tiene fiebre, tos y dificultad para respirar, solicite atención médica a tiempo</h5>
                    <p class="text-justify">Indique a su representante de área de salud si ha viajado a un país en el que se haya notificado la presencia del COVID-19, o si ha tenido 
                      un contacto con alguien que haya viajado y tenga síntomas respiratorios.</p>                  
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
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
