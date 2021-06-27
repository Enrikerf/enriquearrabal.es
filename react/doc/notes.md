to run interactive 

docker run -it -v /Users/enrikerf/workspace/enriquearrabal.es/react/app:/app react_web sh
docker run -it -v /home/kerf/workspace/enriquearrabal.es/react:/app react_web sh


#RUN yarn install --silent --modules-folder ../node_modules # for prod
with expo projects you can't le outside the volume the node_modules because de entrypoint is:
  "main": "node_modules/expo/AppEntry.js",
and the references between files can't be handled. 
* research to change entry point on expo pending: 
  * [thread](https://stackoverflow.com/questions/47742280/how-to-define-entry-point-for-react-native-app)
  * [thread](https://blog.expo.io/building-a-react-native-app-using-expo-and-typescript-part-1-a81b6970bb82)