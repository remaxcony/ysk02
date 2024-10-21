var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.34018119659994817,
        "pitch": 0,
        "fov": 1.7510342431011943
      },
      "linkHotspots": [
        {
          "yaw": -0.06845680316292757,
          "pitch": 0.026359000620727713,
          "rotation": 0,
          "target": "4-distribuidor"
        },
        {
          "yaw": 1.2533942654621484,
          "pitch": 0.013796582909851196,
          "rotation": 0.7853981633974483,
          "target": "1-salon"
        },
        {
          "yaw": -0.6610746908763208,
          "pitch": 0.004426512707823349,
          "rotation": 5.497787143782138,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon",
      "name": "SALON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.7510342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.4837304730499792,
          "pitch": 0.01634918583793521,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.080903765441848,
        "pitch": 0.06928360600458028,
        "fov": 1.7510342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.920158978198927,
          "pitch": 0.03599065967425119,
          "rotation": 0,
          "target": "3-patio-1"
        },
        {
          "yaw": -0.47310865864973906,
          "pitch": 0.026171509796760972,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": -0.1742380078529564,
          "pitch": 0.08873761460720075,
          "rotation": 1.5707963267948966,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-patio-1",
      "name": "PATIO 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0680531807501605,
        "pitch": -0.0242670596405965,
        "fov": 1.7510342431011943
      },
      "linkHotspots": [
        {
          "yaw": -2.8210828531494077,
          "pitch": 0.036092739188744005,
          "rotation": 0,
          "target": "5-hab-1"
        },
        {
          "yaw": -1.9669793052051947,
          "pitch": 0.04255257665531609,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-distribuidor",
      "name": "DISTRIBUIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.819408305214811,
        "pitch": 0.028933008649953962,
        "fov": 1.7510342431011943
      },
      "linkHotspots": [
        {
          "yaw": -1.9229129484699001,
          "pitch": 0.03217359575451084,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 3.025816928386334,
          "pitch": 0.03921535681120503,
          "rotation": 0,
          "target": "11-hab-4"
        },
        {
          "yaw": 2.6863555220252806,
          "pitch": 0.039651341031561316,
          "rotation": 0,
          "target": "10-hab-3"
        },
        {
          "yaw": -2.700847532894951,
          "pitch": 0.040956346450027326,
          "rotation": 0,
          "target": "8-bao-1"
        },
        {
          "yaw": 2.1365437862632044,
          "pitch": 0.06208158666104424,
          "rotation": 0,
          "target": "9-bao-2"
        },
        {
          "yaw": 0.17358906095042315,
          "pitch": 0.0997476199230185,
          "rotation": 0,
          "target": "7-hab-2"
        },
        {
          "yaw": -1.036096863307348,
          "pitch": 0.07015147397853383,
          "rotation": 0,
          "target": "5-hab-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hab-1",
      "name": "HAB 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.7510342431011943
      },
      "linkHotspots": [
        {
          "yaw": -0.03282331087541834,
          "pitch": 0.012305906575775793,
          "rotation": 0,
          "target": "3-patio-1"
        },
        {
          "yaw": 0.264541007036474,
          "pitch": 0.007923063522664364,
          "rotation": 0,
          "target": "6-patio-2"
        },
        {
          "yaw": 2.667165853305841,
          "pitch": 0.033463482565313285,
          "rotation": 0,
          "target": "4-distribuidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-patio-2",
      "name": "PATIO 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.04109641373071149,
        "pitch": 0.24953498042601652,
        "fov": 1.7510342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.5715575889420244,
          "pitch": 0.007988822371070015,
          "rotation": 0,
          "target": "5-hab-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hab-2",
      "name": "HAB 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.7510342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.88154089297708,
          "pitch": 0.05100816491816573,
          "rotation": 0,
          "target": "4-distribuidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao-1",
      "name": "BAÑO 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.444591138617799,
        "pitch": 0.0899671955042507,
        "fov": 1.7510342431011943
      },
      "linkHotspots": [
        {
          "yaw": 3.044167457787619,
          "pitch": 0.13665556872551043,
          "rotation": 0,
          "target": "4-distribuidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bao-2",
      "name": "BAÑO 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.7510342431011943
      },
      "linkHotspots": [
        {
          "yaw": 1.9070652398895156,
          "pitch": 0.010336895391747092,
          "rotation": 0,
          "target": "4-distribuidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-hab-3",
      "name": "HAB 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.7510342431011943
      },
      "linkHotspots": [
        {
          "yaw": -2.370764517107391,
          "pitch": 0.007682047301511119,
          "rotation": 0,
          "target": "4-distribuidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-hab-4",
      "name": "HAB 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.7510342431011943
      },
      "linkHotspots": [
        {
          "yaw": 3.1027155098816896,
          "pitch": 0.06058012609548058,
          "rotation": 0,
          "target": "4-distribuidor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
