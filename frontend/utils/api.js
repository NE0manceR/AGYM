import { sendToAdminEmail } from "./mail";

export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  
  const data = await response.json();
  
  return data;
}

export async function postAPI(path, data) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl, requestOptions);
  
  const respData = await response.json();
  return respData;
}


export async function getHome() {
  const homePage = await fetchAPI(`/home`);
  return homePage;
}

export async function getMainPrices() {
  const mainPrices = await fetchAPI(`/main-prices`);
  return mainPrices;
}

export async function getFAQS() {
  const faqs = await fetchAPI(`/faqs`);
  return faqs;
}

export async function getNutrition() {
  const nutrition = await fetchAPI(`/nutrition-programs`);
  return nutrition;
}

export async function getMembership() {
  const membership = await fetchAPI(`/membership`);
  return membership;
}

// theme-blogs
export async function getThemeBlogs() {
  const themeBlogs = await fetchAPI(`/theme-blogs`);
  themeBlogs.unshift({id: 0, name: 'Всі теми', sub_theme_blogs: []});
  return themeBlogs;
}

export async function getBlogsByThemeId(id) {
  const blogs = await fetchAPI(`/sub-theme-blogs?theme_blogs=${id}`);
  return blogs;
}

export async function getBlogs() {
  const blogs = await fetchAPI(`/sub-theme-blogs`);
  return blogs;
}

export async function getBlogBySearch(text) {
  const blogs = await fetchAPI(`/sub-theme-blogs?_q=${text}`);
  return blogs;
}

export async function getBlogBySlug(slug) {
  const blogs = await fetchAPI(`/sub-theme-blogs?slug=${slug}`);
  return blogs;
}

export async function getNewbie(slug) {
  const newbie = await fetchAPI(`/fitness-for-beginners`);
  return newbie;
}

export async function getDevelopmentVideo() {
  const developmentVideo = await fetchAPI(`/development-of-a-training-program`);
  return developmentVideo;
}

export async function getPersonalVideo() {
  const personalVideo = await fetchAPI(`/personal-training`);
  return personalVideo;
}

export async function getNutritionVideo() {
  const nutritionVideo = await fetchAPI(`/selection-of-food-system`);
  return nutritionVideo;
}

export async function getSupplementVideo() {
  const supplementVideo = await fetchAPI(`/sports-nutrition`);
  return supplementVideo;
}

export async function getAbout() {
  const about = await fetchAPI(`/about`);
  return about;
}

export async function getGalleryPhotos() {
  const galleryPhotos = await fetchAPI(`/galleries`);
  return galleryPhotos;
}

export async function getFeedback() {
  const feedbacks = await fetchAPI(`/feedbacks`);
  return feedbacks;
}


export async function postQuestionRemains(data) {
  const feedbacks = await postAPI(`/question-remains`, data);
  return feedbacks;
}

export async function postTrialTrainingForm(data) {
  const feedbacks = await postAPI(`/trial-training-forms`, data);
  sendToAdminEmail();
  return feedbacks;
}

export async function postTutorialForm(data) {
  const feedbacks = await postAPI(`/tutorial-forms`, data);
  return feedbacks;
}


export async function postProgramForms(data) {
  const feedbacks = await postAPI(`/program-forms`, data);
  return feedbacks;
}
