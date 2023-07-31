from django.db import models

# User Model
class User(models.Model):
    username = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    isEmailConfirmed = models.BooleanField(default=True)
    roles = models.ManyToManyField('Role', blank=True)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "user"

    def __str__(self):
        return self.username

# Role Model
class Role(models.Model):
    roleName = models.CharField(max_length=255, unique=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    lastUpdateUser = models.ForeignKey(User, related_name='updated_roles', on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "role"

    def __str__(self):
        return self.roleName

# Unit Model
class Unit(models.Model):
    unitId = models.BigAutoField(primary_key=True)
    unitName = models.CharField(max_length=255)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    lastUpdateUser = models.ForeignKey(User, related_name='updated_units', on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "unit"

    def __str__(self):
        return self.unitName

# Ingredient Model
class Ingredient(models.Model):
    ingredientId = models.BigAutoField(primary_key=True)
    ingredientName = models.CharField(max_length=255)
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE)
    defaultPrice = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.CharField(max_length=255)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    lastUpdateUser = models.ForeignKey(User, related_name='updated_ingredients', on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "ingredient"

    def __str__(self):
        return self.ingredientName

# Recipe Model
class Recipe(models.Model):
    recipeId = models.BigAutoField(primary_key=True)
    recipeName = models.CharField(max_length=255)
    portionCount = models.PositiveIntegerField()
    preparationDescription = models.TextField()
    recipeIngredients = models.ManyToManyField(Ingredient, through='RecipeIngredient')
    recipeCategories = models.ManyToManyField('RecipeCategory', blank=True)
    recipeTags = models.ManyToManyField('RecipeTag', blank=True)
    searchDescription = models.TextField()
    recipeRatings = models.ManyToManyField('RecipeRating', blank=True)
    difficultAssessment = models.ForeignKey('DifficultAssessment', on_delete=models.CASCADE)
    preparationTime = models.PositiveIntegerField()
    isEditMode = models.BooleanField()
    images = models.ManyToManyField('Image', blank=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    lastUpdateUser = models.ForeignKey(User, related_name='updated_recipes', on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "recipe"

    def __str__(self):
        return f"{self.recipeId}_{self.recipeName}"

# RecipeIngredient Model (through model for M2M with additional field unitQuantity)
class RecipeIngredient(models.Model):
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    unitQuantity = models.PositiveIntegerField()

    class Meta:
        db_table = "recipe_ingredient"
        unique_together = ('ingredient', 'recipe')

# RecipeCategory Model
class RecipeCategory(models.Model):
    recipeCategoryId = models.BigAutoField(primary_key=True)
    recipeCategoryName = models.CharField(max_length=255)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    lastUpdateUser = models.ForeignKey(User, related_name='updated_recipe_categories', on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "recipe_category"

    def __str__(self):
        return self.recipeCategoryName

# RecipeTag Model
class RecipeTag(models.Model):
    recipeTagId = models.BigAutoField(primary_key=True)
    recipeTagName = models.CharField(max_length=255)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    lastUpdateUser = models.ForeignKey(User, related_name='updated_recipe_tags', on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "recipe_tag"

    def __str__(self):
        return self.recipeTagName

# RecipeRating Model
class RecipeRating(models.Model):
    recipeRatingId = models.BigAutoField(primary_key=True)
    starRating = models.DecimalField(max_digits=3, decimal_places=1)
    comment = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "recipe_rating"

    def __str__(self):
        return f"{self.recipeRatingId}_{self.starRating}"

# Brand Model
class Brand(models.Model):
    brandId = models.BigAutoField(primary_key=True)
    brandName = models.CharField(max_length=255)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    lastUpdateUser = models.ForeignKey(User, related_name='updated_brands', on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "brand"

    def __str__(self):
        return self.brandName

# IngredientProduct Model
class IngredientProduct(models.Model):
    ingredientProductId = models.BigAutoField(primary_key=True)
    ingredientProductName = models.CharField(max_length=255)
    ingredientMapping = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    unitQuantity = models.PositiveIntegerField()
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    lastUpdateUser = models.ForeignKey(User, related_name='updated_ingredient_products', on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "ingredient_product"

    def __str__(self):
        return self.ingredientProductName

# UserIngredientPreference Model
class UserIngredientPreference(models.Model):
    userIngredientPreferenceId = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    ingredientProduct = models.ForeignKey(IngredientProduct, on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "user_ingredient_preference"

# Store Model
class Store(models.Model):
    storeId = models.BigAutoField(primary_key=True)
    storeName = models.CharField(max_length=255)
    street = models.CharField(max_length=255)
    streetNumber = models.CharField(max_length=10)
    postCode = models.CharField(max_length=20)
    district = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    lastUpdateUser = models.ForeignKey(User, related_name='updated_stores', on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "store"

    def __str__(self):
        return self.storeName

# Cart Model
class Cart(models.Model):
    cartId = models.BigAutoField(primary_key=True)
    cartName = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sharedWithUsers = models.ManyToManyField(User, blank=True, related_name='shared_carts')
    cartPlanEntries = models.ManyToManyField('CartPlanEntry', blank=True)
    lastUpdateUser = models.ForeignKey(User, related_name='updated_carts', on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "cart"

    def __str__(self):
        return self.cartName

# CartPlanEntry Model
class CartPlanEntry(models.Model):
    cartPlanEntryId = models.BigAutoField(primary_key=True)
    planDate = models.DateTimeField()
    dayTime = models.ForeignKey('DayTime', on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    lastUpdateUser = models.ForeignKey(User, related_name='updated_cart_plan_entries', on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "cart_plan_entry"

# DayTime Model
class DayTime(models.Model):
    dayTimeId = models.BigAutoField(primary_key=True)
    dayTimeName = models.CharField(max_length=255)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    lastUpdateUser = models.ForeignKey(User, related_name='updated_day_times', on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "day_time"

    def __str__(self):
        return self.dayTimeName

# DifficultAssessment Model
class DifficultAssessment(models.Model):
    difficultAssessmentId = models.BigAutoField(primary_key=True)
    difficultAssessmentName = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "difficult_assessment"

    def __str__(self):
        return self.difficultAssessmentName

# Image Model
class Image(models.Model):
    imageId = models.BigAutoField(primary_key=True)
    imageUrl = models.CharField(max_length=255)
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()

    class Meta:
        db_table = "image"

    def __str__(self):
        return self.imageUrl
