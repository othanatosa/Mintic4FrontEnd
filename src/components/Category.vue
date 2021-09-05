<template>
<section class="vh-100">

    <div class="container h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
            <div >
                <img src="../assets/category.png" class="img-calendar" alt="Calendar task" />
                <div class="absolute d-flex flex-column justify-content-between" style="height: 200px;">
                    <button type="button" class="btn" data-toggle="modal" data-target="#newModal">Nueva Categoria</button>  
                    <button type="button" class="btn" data-toggle="modal" data-target="#deleteModal" >Eliminar Categoria</button>     
                </div>
            </div>

        </div>
      
    </div>

    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">

            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" >Borrar Categoria</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <h4><label for="recipient-name" class="col-form-label">Título:</label></h4>
                            <input type="search" class="form-control rounded" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon"  id="buscar-categoria">
                        </div>
                    </form>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary">Eliminar Categoria</button>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="newModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" >Nueva Categoria</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <h4><label  class="col-form-label">Nombre:</label></h4>
                            <input type="text" class="form-control rounded" id="category-name">
                        </div>
                        <div class="form-group">
                            <h4><label  class="col-form-label">Color:</label></h4>
                            <input type="text" class="form-control rounded" id="color-category">
                        </div>

                    </form>
                </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary">Añadir Categoria</button>
                </div>
            </div>
        </div>
    </div>


  </section>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      msg: "This is the Catefory View"
    };
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  color: #5264ef;
}

h4 {
  font-weight: normal;
  color: #5264ef;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.container{
  padding-bottom: 1vh;
}
.nav-item .nav-link{
  color: #42b983;
}
.nav-item .nav-link.active{
  background-color: #edfaff;
  border-bottom-color: #edfaff;
}
.btn{
  background-color: #5264ef;
  color: #fff;
}
.img-calendar {
	width: 876px;
	height: 525px;
  margin-left: 350px;
}

div.absolute {
  position: absolute;
  top: 20%;
  right: 75%;
  width: 300px;
  height: 600px;
}

.modal-header {

    background-color: #5264ef;
    color: white;
 }

</style>
