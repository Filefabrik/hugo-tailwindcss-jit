# hugo-tailwind-jit
Get Static Side Generator Hugo running with tailwind 2 and JIT

node.js: lts/fermium -> v14.17.0

hugo: hugo v0.83.1

IDE: PHPStorm 2021.1.2

My intension was to get Hugo working with tailwindcss and the new JIT compiler.

Honestly, I have saved myself a deep review of all existing possibilities.

Hugo should run with tailwindcss 2.* for development and with the new tailwind jit. No more and no less.

I had oriented myself on the following tutorial:

https://www.wimdeblauwe.com/blog/2021/01/18/using-hugo-with-tailwind-css-2/ .

Usually tailwindcss JIT compiler is needed when you work on the layout files. Possibly also in the content/*.md files. Otherwise rather not.

Application:
check out into a new folder the master-git here.
install all dependencies with 
```shell
npm i -D
```

start in the package.json

**devWatcherTailwindStartFirst**
then start the hugo-server
**server**

open in browser 

http://localhost:1313/

edit the layout-files under /layouts and, you will see the tailwind.css is not 3MB big but a few KB

for the build of the page i created an extra task "**buildTailwindAndHugo**".

Conclusion: if you don't work on the layouts you need the **devWatcherTailwindStartFirst**, then just start the server. 

![ksnip_20210522-132900](https://user-images.githubusercontent.com/84433563/119225757-216e3280-bb06-11eb-903e-cd4ff937a339.png)

Hope that helps
