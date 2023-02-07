# How to use Tailwind CSS in Django

- Make directory `mkdir theme` or any name of your choice
- cd into the directory `cd theme`
- `nmp init -y`
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init` to create tailwind config file
- Add the paths to all of your template files in your `tailwind.config.js` file:

    ```js
    content: [
        // Templates within theme app (e.g. base.html)
        '../templates/**/*.html',
        // Templates in other apps
        '../../templates/**/*.html',
        // Ignore files in node_modules
        '!../../**/node_modules',
        // Include JavaScript files that might contain Tailwind CSS classes
        '../../**/*.js',
        // Include Python files that might contain Tailwind CSS classes
        '../../**/*.py'
    ],
    ```

- Add the Tailwind directives to your CSS
Add the `@tailwind` directives for each of Tailwind’s layers to your main CSS file. Create a file `touch main.css` paste the following:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

- Run your build process with `npm run dev` or whatever command is configured in your `package.json` file.
- In our case, we create a `scripts` in `package.json` to run our dev. So in `package.json` add the following:

    ```json
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "dev": "npx tailwindcss -i ./main.css -o ./dist/css/base.css --watch",
            "build": "npx tailwindcss -i ./main.css -o ./dist/css/base.css"
        },
    ```

- Run `npm run build` to create the neccessary files
- In `settings.py` configure add `STATICFILES_DIRS = [BASE_DIR / "dist"]`
- Setup base.html as follows:

```Django HTML
    <!DOCTYPE html>
    {% load static %}
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="{% static 'css/base.css' %}">
    </head>
    <body>
        {% block content %}
        {% endblock content %}
    </body>
    </html>
```

- Run server `python manage.py runserver` in the dir that contains `manage.py`
- Run `npm run dev`
