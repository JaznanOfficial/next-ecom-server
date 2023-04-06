# Next Ecom

## API Reference

## Main root

```
  https://next-ecom-server.cyclic.app/
```

## users api

#### get,post,put and delete all users

```http
/api/v1/users
```

-   for get,put,delete with any query use query after this api. like this:

```http
/api/v1/users?email=abc@gmail.com
```

#### which data you can provide

| Property | Value    | Description                                       |
| :------- | :------- | :------------------------------------------------ |
| `name`   | `string` | **Required**.                                     |
| `email`  | `string` | **Required and must be unique**.                  |
| `img`    | `string` | **must be img link**.                             |
| `role`   | `string` | **must be one of these 3- admin,moderator,user**. |

<!-- user api -->

## categories api

#### get,post,put and delete all users

```http
/api/v1/categories
```

-   for get,put,delete with any query use query after this api. like this:

```http
/api/v1/categories?email=abc@gmail.com
```

#### which data you can provide

| Property | Value    | Description           |
| :------- | :------- | :-------------------- |
| `name`   | `string` | **Required**.         |
| `img`    | `string` | **must be img link**. |

<!-- categories api -->

## products api

#### get,post,put and delete all users

```http
/api/v1/products
```

-   for get,put,delete with any query use query after this api. like this:

```http
/api/v1/products?email=abc@gmail.com
```

#### which data you can provide

| Property        | Value    | Description                                                                                    |
| :-------------- | :------- | :--------------------------------------------------------------------------------------------- |
| `name`          | `string` | **Required**.                                                                                  |
| `email`         | `string` | **must be a valid email**.                                                                     |
| `img`           | `string` | **must be img link**.                                                                          |
| `post`          | `string` | **Required**.                                                                                  |
| `category`      | `string` | **required**.                                                                                  |
| `like_count`    | `number` | **not-required**.                                                                              |
| `dislike_count` | `number` | **not-required**.                                                                              |
| `comments`      | `object` | **it accepts 2 properties:- email, it must be a valid email. and comment, it will be string**. |

<!-- courses api -->
