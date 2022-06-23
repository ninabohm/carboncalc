osascript -e 'tell app "Terminal" to do script "cd /Users/nina.bohm/Development/kafka_2.13-3.2.0
bin/zookeeper-server-start.sh config/zookeeper.properties
delay 3"'


osascript -e 'tell app "Terminal" to do script "cd /Users/nina.bohm/Development/kafka_2.13-3.2.0
bin/kafka-server-start.sh config/server.properties"'

osascript -e 'tell app "Terminal" to do script "cd /Users/nina.bohm/Development/private/carboncalc/api-gateway
npm run start:dev"'

osascript -e 'tell app "Terminal" to do script "cd /Users/nina.bohm/Development/private/carboncalc/certificate-service
npm run start:dev"'

osascript -e 'tell app "Terminal" to do script "cd /Users/nina.bohm/Development/private/carboncalc/user-service
npm run start:dev"'


