#! /bin/bash
cd /home/manniru/heartrate/api && json-server --watch db.json -p 3001 & cd /home/manniru/heartrate && yarn start
EOF
