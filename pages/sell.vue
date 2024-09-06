<template>
  <div>
    <br />
    <br />
    <form class="max-w-lg mx-auto">
      <div class="mb-5">
        <label
          for="small-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Product Title</label
        >
        <input
          v-model="productTitle"
          type="text"
          id="small-input"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="mb-5">
        <label
          for="small-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Product Category</label
        >
        <input
          v-model="productCategory"
          type="text"
          id="small-input"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="mb-5">
        <label
          for="small-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Product Price</label
        >
        <input
          v-model="productPrice"
          type="text"
          id="small-input"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="mb-5">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Product Description
        </label>
        <textarea
          v-model="productDescription"
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write Your Product Description"
        ></textarea>
      </div>

      <div class="mb-5">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="user_avatar"
          >Upload a product image</label
        >
        <input
          @change="handleFileChange"
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
        <div
          class="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="user_avatar_help"
        >
          A good product image will increase your sales
        </div>
      </div>

      <!-- success message -->
      <div v-if="imageUploadSuccessMsg">
        <p
          id="filled_success_help"
          class="mt-2 text-xs text-green-600 dark:text-green-400"
        >
          <span class="font-medium"
            >Well done! {{ imageUploadSuccessMsg }}</span
          >
        </p>
      </div>
      <!-- error message -->
      <div v-if="imageUploadErrorMsg">
        <p
          id="outlined_error_help"
          class="mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium">Oh, snapp! {{ imageUploadErrorMsg }}</span>
        </p>
      </div>

      <button
        @click="uploadImage"
        type="button"
        class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Upload Image
      </button>

      <div class="inline-flex items-center justify-center w-full">
        <hr
          class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"
        />
        <div
          class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900"
        >
          <svg
            class="w-4 h-4 text-gray-700 dark:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path
              d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
            />
          </svg>
        </div>
      </div>

      <button
        @click="createProduct"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Submit Product
      </button>

      <button
        @click="clearEverything"
        type="button"
        class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Clear Every things
      </button>

      <!-- success message -->
      <div v-if="productCreationSuccessMsg">
        <p
          id="filled_success_help"
          class="mt-2 text-xs text-green-600 dark:text-green-400"
        >
          <span class="font-medium"
            >Well done! {{ productCreationSuccessMsg }}</span
          >
        </p>
      </div>
      <!-- error message -->
      <div v-if="productCreationErrorMsg">
        <p
          id="outlined_error_help"
          class="mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium"
            >Oh, snapp! {{ productCreationErrorMsg }}</span
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
  const user = useSupabaseUser();
  const supabase = useSupabaseClient();

  if (!user.value) {
    await navigateTo('/login');
  }

  const productTitle = useState(() => null);
  const productCategory = useState(() => null);
  const productPrice = useState(() => null);
  const productDescription = useState(() => null);
  const productImage = useState(() => null);
  const imageUrl = useState(() => null);
  const imageUploadSuccessMsg = useState(() => null);
  const imageUploadErrorMsg = useState(() => null);
  const productCreationSuccessMsg = useState(() => null);
  const productCreationErrorMsg = useState(() => null);

  const clearEverything = () => {
    productTitle.value = null;
    productCategory.value = null;
    productPrice.value = null;
    productDescription.value = null;
    productImage.value = null;
    imageUrl.value = null;
    imageUploadSuccessMsg.value = null;
    imageUploadErrorMsg.value = null;
    productCreationSuccessMsg.value = null;
    productCreationErrorMsg.value = null;
  };

  const handleFileChange = (event) => {
    productImage.value = event.target.files[0];
  };

  const uploadImage = async () => {
    console.log('productImage.value', productImage.value);
    if (!productImage.value) {
      if (import.meta.client) {
        alert('Please select an image to upload');
        return;
      }
    }

    const image = productImage.value;
    try {
      const { data, error } = await supabase.storage
        .from('images')
        .upload(`public/${image.name}`, image, {
          cacheControl: '3600',
          upsert: false,
        });
      if (data) {
        imageUploadSuccessMsg.value = 'Image uploaded successfully';
        const { data } = supabase.storage
          .from('images')
          .getPublicUrl(`public/${image.name}`);
        imageUrl.value = data.publicUrl;
      }
    } catch (error) {
      imageUploadErrorMsg.value = error.message;
    }
  };

  const createProduct = async () => {
    const { data: product, error } = await useFetch(
      '/api/products/create-new-product',
      {
        query: {
          title: productTitle.value,
          description: productDescription.value,
          image: imageUrl.value,
          category: productCategory.value,
          price: productPrice.value,
        },
      }
    );

    if (error.value) {
      productCreationErrorMsg.value =
        'An error occurred while creating the product';
      return;
    }

    productCreationSuccessMsg.value = 'Product created successfully';
    const productId = product.value.id;

    setTimeout(async () => {
      await navigateTo(`/product-${productId}`);
    }, 2000);
  };
</script>

<style lang="scss" scoped></style>
