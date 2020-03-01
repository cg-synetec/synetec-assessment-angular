# Synetec Basic Angular MVC assessement

## Set up the environment

1. Run npm install to make sure you have all the dependencies set up
2. Run `ng serve` and make sure the app is running.

The Angular application depends on a separate .net Core API, you will need this running on your development environment to complete assesment's tasks. To provision the API, please:

1. Clone (or fork and clone) the repo https://github.com/Synetec/synetec-interview-test-net-core-api locally
2. remove `ToList()` from Delete(City cityToDelete) method
3. Build the solution
4. Run the Synetec.CityInfo.Api project to host the API
