<template>
    <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create New Recipe</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
            <div class="form-group">
                <label for="title" class="col-form-label">Title:</label>
                <input type="text" class="form-control" id="title">
                <label for="readyInMinutes" class="col-form-label">Ready In Minutes:</label>
                <input type="text" class="form-control" id="readyInMinutes">
                <label for="servings" class="col-form-label">Servings:</label>
                <input type="text" class="form-control" id="servings">
                <label>Vegan</label>
                <input type="checkbox" id="vegan">
                <label>Vegetarian</label>
                <input type="checkbox" id="vegetarian">
                <label>Gluten Free</label>
                <input type="checkbox" id="glutenFree">
                <!-- TODO: add image -->
            </div>
            <div class="form-group">
                <label for="ingredients" class="col-form-label">Ingredients:</label>
                <textarea class="form-control" id="ingredients"></textarea>
                <label for="instructions" class="col-form-label">Instructions:</label>
                <textarea class="form-control" id="instructions"></textarea>
            </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Create</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
</script>

<style>
</style>