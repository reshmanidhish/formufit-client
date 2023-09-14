import axios from "axios";

class FormuFitService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/examples
  createOne = async (requestBody) => {
    return this.api.post("/api/examples", requestBody);
  };

  // GET /api/examples
  getAll = async () => {
    return this.api.get("/api/examples");
  };

  // GET /api/examples/:id
  getOne = async (id) => {
    return this.api.get(`/api/examples/${id}`);
  };

  // PUT /api/examples/:id
  updateOne = async (id, requestBody) => {
    return this.api.put(`/api/examples/${id}`, requestBody);
  };

  // DELETE /api/examples/:id
  deleteProject = async (id) => {
    return this.api.delete(`/api/examples/${id}`);
  };

  // GET /workouts
  getWorkouts = async () => {
    return this.api.get("/workouts");
  };

  // GET /workouts/upload
  createWorkouts = async (requestBody) => {
    return this.api.post("/workouts/upload", requestBody);
  };

  // PUT /profile/wellness/anwers
  updateWellnessProfile = async (requestBody) => {
    return this.api.put("/profile/wellness/answers", requestBody);
  };

  // GET /recipes
  getAllRecipes = async () => {
    return this.api.get("/recipes");
  };

  // GET one recipes
  getRecipe = async (recipeId) => {
    return this.api.get(`/recipes/${recipeId}`);
  };

  // PUT /recipes/edit/:recipeId
  updateRecipe = async (recipeId, requestBody) => {
    return this.api.put(`/recipes/edit/${recipeId}`, requestBody);
  };

  // DELETE /recipes/delete/:recipeId
  deleteRecipe = async (recipeId) => {
    return this.api.delete(`/recipes/delete/${recipeId}`);
  };

  // CREATE /recipes/delete/:recipeId
  createRecipe = async (newRecipe) => {
    return this.api.post(`/recipes/create`, newRecipe);
  };

  getWellness = async () => {
    return this.api.get(`/profile/wellness`);
  };
  createCommentAndRating = async (requestBody) => {
    return this.api.post(`/comment-rating`, requestBody);
  };
  getComments = async (recipeId) => {
    return this.api.get(`/recipes/${recipeId}`);
  };

  createRating = async (requestBody) => {
    return this.api.post(`/rating`, requestBody);
  };

  getPaymentConfig = async () => {
    return this.api.get(`/payment/config`);
  };

  paymentIntent = async (subscriptionId) => {
    return this.api.post(
      `/payment/create-payment-intent?subscriptionId=${subscriptionId}`
    );
  };

  subscribeUser = async () => {
    return this.api.put(`/payment/subscribe`);
  };
}

const formuFitService = new FormuFitService();

export default formuFitService;
