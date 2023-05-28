const dns = require('node:dns');

dns.lookup('google.com', (err, address, family) => {
    //console.log('address %j family: IPv%s', address, family);
});


let res = dns.resolve4('google.com', (err, addresses) => {
    if(err) throw err;
    //console.log(`addresses: ${JSON.stringify(addresses)}`);
});

const resolver = new dns.Resolver();

resolver.setServers(['4.4.4.4']);

//console.log(resolver.getServers());

/* resolver.resolve4('example.org', (err, addresses) => {
    if(err) console.log(err);
    console.log(addresses);
}) */


