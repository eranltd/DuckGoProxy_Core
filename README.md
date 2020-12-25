# .Net Core + React.JS + Redux Proxy API Sample project

![alt text](https://www.henkla.se/wp-content/uploads/2019/09/justmock__net_770.png)
![alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--50wZvNu6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png)


__This project is setup using the "React project template with ASP.NET Core"__
see documentation [here](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-5.0&tabs=visual-studio)

## Overview

This project is built from 2 main parts : ___.net core(backend)___, the ___react(front-end)___ and ___redux___ library
I choose to host the react SPA within the .net core, that why you are going to use VS 2019 inorder to run it or dotnet run command.
plus, i want both servers to run from the same origin.
## Structure and Data Flow

A unidirectional data flow is central to react,is used on frontend side with redux, react hooks and material design
on server side many "nice to have" patterns has been used such as (Dependency Injection, ResponseCaching and such)


## Running the sample

( You can also run this samples in Docker (see below). )
1. Open a command prompt in the Web folder (~/DuckGoProxy_Core/DuckGoProxy_Core)  (where csproj file is located) and execute the following commands:

```
dotnet restore
dotnet tool restore
```
1.1 Open a command prompt in the React Web folder (~/DuckGoProxy_Core\DuckGoProxy_Core/ClientApp)  and execute the following commands:

```
npm install
```

2. Run the application via "dotnet run command" 
```
dotnet run command
```

__once the project will run you'll have a SPA Web App at http://<ipaddress || localhost>:5000/.__ 

## Running the sample using Docker

## add .Dockerfile in order to run it.

[Micosoft .Dockerfile] https://docs.docker.com/engine/examples/dotnetcore/

You can run the Web sample by running these commands from the root folder (where the .sln file is located):

```
    docker-compose build
    docker-compose up
```

You can also run the applications by using the instructions located in their `Dockerfile` file in the root of each project. Again, run these commands from the root of the solution (where the .sln file is located).

***you can also run this project as 2 seperated servers:

__First Remove the Use.SPA code__ (from Startup.cs) (just comment this lines)
```
 services.AddSpaStaticFiles(configuration =>
                {
                    configuration.RootPath = "ClientApp/build";
                });
                
 app.UseSpaStaticFiles();
 
app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
```
Run the application via "dotnet run command" (~/DuckGoProxy_Core/DuckGoProxy_Core)
Run the react server via npm commands( from ~/DuckGoProxy_Core\DuckGoProxy_Core/ClientApp folder)
```
npm install
npm start
```
```
## Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
