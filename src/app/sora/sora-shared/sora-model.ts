export class Mainstockin {
    lotid: number;
    hcode: string;
    mid: number;
    datestockin: string;
    supid: number;
    numstockin: number;
    pricen: number;
    pricelot: number;
    notelot: string;
    expire: number;
    mcode: string;
    usernames: string;
    mname: string;
}

export class Mainstockout {
    soid: number;
    lotnumber: number;
    username: string;
    datestockout: string;
    lastupdate: string;
    numstockout: string;
    mid: number;
    hcode: string;
    receiver: number;
    priceout: number;
    stdel: number;
    usernames: string;
    pricen: number;
    numstockin: any;
    notelot: string;
    expire: number;
    mcode: string;
    mname: string;
}

export class MainproductDt {
    mid: number;
    catid: number;
    mcode: string;
    mname: string;
    munit: string;
    numnow: number;
    tag: string;
    prunit61: number;
    lastupdate: string;
    hcode: string;
    genname: string;
    nummin: number;
    usernames: string;

}