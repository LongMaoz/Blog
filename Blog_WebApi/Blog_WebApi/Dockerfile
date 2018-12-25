#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1803 AS base
WORKDIR /app
EXPOSE 57980
EXPOSE 44333

FROM microsoft/dotnet:2.1-sdk-nanoserver-1803 AS build
WORKDIR /src
COPY ["Blog_WebApi/Blog_WebApi.csproj", "Blog_WebApi/"]
RUN dotnet restore "Blog_WebApi/Blog_WebApi.csproj"
COPY . .
WORKDIR "/src/Blog_WebApi"
RUN dotnet build "Blog_WebApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Blog_WebApi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Blog_WebApi.dll"]