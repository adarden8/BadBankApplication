const admin = require('firebase-admin');

const type = "service_account";
const project_id = "badbank-36017";
const private_key_id = "136fac74d127380d584caf3cc96dbc1258f30021";
const private_key =" -----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQChs9Q4Zl55KFyB\n119h5N1mDZyn7OJxRzb0Lu+lqPCWcHBt1v58Pw48S7QBjormzNXTFP9dRUg7XJQr\notJZ9j0XDwe56k+wOJVJO+zLqAet6gRbp77/1gifZTwGX+K0/VRmTV9QrTJeeJH9\npIvFGk3pQGDOKvDsxBZHN4qhu23SiXdhLRYwmCyofmzvgry5K1dhMIRcuHOgymYs\nUCgtEAIL30n71WZzjDHW9/uHqaR2U/XF7DNq1L7ovgLqPNMqhRk2Z5AdJf1ECnLa\nprRgIrQGMMVMHrLgnu7YLmvxQnpwkDALQ+a7g0EkaDyJya+ypk2voIP0etkus7S6\nb/ijLh2RAgMBAAECggEAJusuyVJOK6/8r92D3f5lESJ2kW4wxB3lSpkfYcpK+ZJf\nZPhpcMMGbJm13egOY2Vqk27K1YqOy4bJPMVoBnH/GxUpgWQ1QM8lkyZCpHOxQXkB\nCoRRsqazlZWagFhEqtYMIcE+jx7YcCdpz9fyMgLWPK0bf5OTQBEj4YkrKyj+0jyU\nTq8S7EUXZvV3SUZfI+bySAmYkpRcPxSB5i/9g8tdQ62M80O7lgUuhvSNj2HYyWkA\nCZNTUqUtNOWPxBJ5qgUXq2nVC0zgyax2OUyo8ZkB/8cbGVhEks5oHsYPiJdXqOxe\nIHfq1m/OwGvEhm1S2kNEgmy8yN/CtA/OGOXLHMjU6QKBgQDh57axWpnK0QegxbZE\nZZF7Vp9lX+SlwnF/YIYPbnrW6sW2ykXsENhyel33YT8/q3Rt5/y2ImvCuPb5/Ku+\nXvJ/zCP9px0qbi8MiHYxczi5YoKklQidIStx4x4hKWSBGU/c/FU8KKCBNb1X4+fy\nqPv2IVxWM6C4s2AariVwwx/QhQKBgQC3PorTTmboOSMIIuw/z2RdAM6CH8uipD2a\newgwO383fuUHcTPUwb9RjIsC9U5OLiVaGx2j7SZ0IaUnEpU3SqfTIMR6RLrQV+Ct\nD/McPmVv7Vp7TWZ45Or28f5HvDVA5s+j9UvzMCQ96XtZVjRLbZcMbNInOBM4zg6+\nk/DxPuEMnQKBgGqp3bkf7j21NMTUlZr12htCa0CSZoNdq/lYufPPVnDjqTcFir5L\ntedXn8aORC7r5a1/O/NDjV4Dt5mRlAXvDtEIsnWx0jOWkuB4DlaK8N2XhdfwBoEq\niDjd4/wEb1AFg4/0FMqy5BYeKai2E26gG1e7qL2K4vhSua3fTA5SE1OBAoGAUvvY\nxK65vaq6aaHfGVqjWdbWrmkVwBbe6wmSgL1A9HHb6E3kqhH/wT+DaJiMmK0fLzoe\nZzEre+YMs7AfsQV3EQ7Cy5g6fcV+MwGJGB5Ns61qj3JS2KbanXCjtfrOpxCfseGR\nPpVrpDoLKT73ubzsba0OUsJ7OftfBAFdWPMf2aUCgYAb2XxKkMTpb9xqLoqY3S9K\nzN/wWGJ1KiArAdWzm3y6Em0gu3HLDVRteYjT/bcHX2DJ1CAM/m6gROynxUDYt63g\neOl++qMsvbFIFSnScDcoO19Cx6g5REbR6d2Xwmbi6O4SAZZG0BhuyiRgCR0jivzl\nlpPvWkoXetW8h6Sx7/5cKg==\n-----END PRIVATE KEY-----\n";
const client_email =  "firebase-adminsdk-2033i@badbank-36017.iam.gserviceaccount.com";
const client_id = "114940123621302924055";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs"; 
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2033i%40badbank-36017.iam.gserviceaccount.com";

/* const type = "";
const project_id = "";
const private_key_id = "";
const private_key = ""
const client_email = "";
const client_id = "";
const auth_uri = "";
const token_uri = "";
const auth_provider_x509_cert_url = "";
const client_x509_cert_url = ""; */

// credential grants access to Firebase services
admin.initializeApp({
    credential: admin.credential.cert({
        type,
        project_id,
        private_key_id,
        private_key:
          private_key.replace(/\\n/g,'\n'),
        client_email,
        client_id,
        auth_uri,
        token_uri,
        auth_provider_x509_cert_url,
        client_x509_cert_url
    }),
  });

module.exports = admin;