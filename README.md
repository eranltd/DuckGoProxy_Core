# .Net Core + React.JS + Redux Proxy API Sample project

![alt text](https://www.henkla.se/wp-content/uploads/2019/09/justmock__net_770.png)
![alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--50wZvNu6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png)


__This project is setup using the "React project template with ASP.NET Core"__
see documentation [here](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-5.0&tabs=visual-studio)

## Overview

Flux applications have three major parts: the ___dispatcher___, the ___stores___, and the ___views___ (React components).  These should not be confused with Model-View-Controller.  Controllers do exist in a Flux application, but they are ___controller-views___ -- views often found at the top of the hierarchy that retrieve data from the stores and pass this data down to their children.  Additionally, ___action creators___ — dispatcher helper methods — are often used to support a semantic dispatcher API.  It can be useful to think of them as a fourth part of the Flux update cycle.


## Structure and Data Flow

Data in a Flux application flows in a single direction, in a cycle:

<img src="../../docs/img/flux-diagram-white-background.png" style="width: 100%;" />

A unidirectional data flow is central to the Flux pattern, and in fact Flux takes its name from the Latin word for flow. In the above diagram, the ___dispatcher___, ___stores___ and ___views___ are independent nodes with distinct inputs and outputs. The ___action creators___ are simply discrete, semantic helper functions that facilitate passing data to the ___dispatcher___ in the form of an ___action___.


## Running the sample

( You can also run the samples in Docker (see below). )

1. Open a command prompt in the Web folder and execute the following commands:

```
dotnet restore
dotnet tool restore
```

1. Run the application via "dotnet run command" 

```
-- 
dotnet run --project ./DuckGoProxy_Core/DuckGoProxy_Core.csproj 
```

## Running the sample using Docker

You can run the Web sample by running these commands from the root folder (where the .sln file is located):

```
    docker-compose build
    docker-compose up
```

You should be able to make requests to localhost:5106 for the Web project, and localhost:5200 for the Public API project once these commands complete. If you have any problems, especially with login, try from a new guest or incognito browser instance.

You can also run the applications by using the instructions located in their `Dockerfile` file in the root of each project. Again, run these commands from the root of the solution (where the .sln file is located).

## Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
