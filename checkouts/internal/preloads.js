
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.9CyK3lJA.js","/cdn/shopifycloud/checkout-web/assets/c1/app.CGM4qNRg.js","/cdn/shopifycloud/checkout-web/assets/c1/630ba094.BaH5gF1s.js","/cdn/shopifycloud/checkout-web/assets/c1/4509beb0.pW5SgIIP.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6.D8AYYx95.js","/cdn/shopifycloud/checkout-web/assets/c1/f025431a.XKyaHtl9.js","/cdn/shopifycloud/checkout-web/assets/c1/6ec9a0fa.DSSNWcoj.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3.D4LqDyfE.js","/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968.DnvQj90_.js","/cdn/shopifycloud/checkout-web/assets/c1/7d6bf786.BnOOC_z9.js","/cdn/shopifycloud/checkout-web/assets/c1/6b0dea54.C3LTrp9n.js","/cdn/shopifycloud/checkout-web/assets/c1/0f5b1987.DSXi-bkQ.js","/cdn/shopifycloud/checkout-web/assets/c1/9e5d8eb8.qjtHGJMj.js","/cdn/shopifycloud/checkout-web/assets/c1/a45fed45.BEbsMXdy.js","/cdn/shopifycloud/checkout-web/assets/c1/c328865d.g7VQW1Xy.js","/cdn/shopifycloud/checkout-web/assets/c1/f1384cc2.BrGHQ0Kc.js","/cdn/shopifycloud/checkout-web/assets/c1/3c88b112.DrC0yDnj.js","/cdn/shopifycloud/checkout-web/assets/c1/486c3fda.BO4SSqB-.js","/cdn/shopifycloud/checkout-web/assets/c1/17f6d6d8.Cksra5kw.js","/cdn/shopifycloud/checkout-web/assets/c1/19286c78.CVk8q9ww.js","/cdn/shopifycloud/checkout-web/assets/c1/cb6adac5.BJYq0K_G.js","/cdn/shopifycloud/checkout-web/assets/c1/c7b92b97.ClZQ0j_9.js","/cdn/shopifycloud/checkout-web/assets/c1/faece749.CkSlWzVw.js","/cdn/shopifycloud/checkout-web/assets/c1/77d9e668.CcFjq69H.js","/cdn/shopifycloud/checkout-web/assets/c1/83dfec2b.BMzSbEGn.js","/cdn/shopifycloud/checkout-web/assets/c1/a1157422.B3vGPVk5.js","/cdn/shopifycloud/checkout-web/assets/c1/77821758.B8cJZCav.js","/cdn/shopifycloud/checkout-web/assets/c1/9c33421f.CB7H-JWE.js","/cdn/shopifycloud/checkout-web/assets/c1/2c7267bc.CWyx42kW.js","/cdn/shopifycloud/checkout-web/assets/c1/37c3ef79.COMdmcTW.js","/cdn/shopifycloud/checkout-web/assets/c1/82d59f8f.CufgQaxZ.js","/cdn/shopifycloud/checkout-web/assets/c1/651bb548.vVaI3k-u.js","/cdn/shopifycloud/checkout-web/assets/c1/b71b03d1.CFHIma4Z.js","/cdn/shopifycloud/checkout-web/assets/c1/928dbd30.BR76IFkh.js","/cdn/shopifycloud/checkout-web/assets/c1/a8202753.BsHcKvqw.js","/cdn/shopifycloud/checkout-web/assets/c1/17db3e71.DMsWGlmQ.js","/cdn/shopifycloud/checkout-web/assets/c1/2f5db8a5.C2skX-Re.js","/cdn/shopifycloud/checkout-web/assets/c1/c0466e46.Dbvr16QL.js","/cdn/shopifycloud/checkout-web/assets/c1/5f07060a.cymSjIV8.js","/cdn/shopifycloud/checkout-web/assets/c1/83f74304.CigjqG0H.js","/cdn/shopifycloud/checkout-web/assets/c1/7edfee1d.-I1XTEMv.js","/cdn/shopifycloud/checkout-web/assets/c1/ce604576.DV8F48VL.js","/cdn/shopifycloud/checkout-web/assets/c1/b01c110b.CwUe-JW5.js","/cdn/shopifycloud/checkout-web/assets/c1/f1754c88.DYaHf-SI.js","/cdn/shopifycloud/checkout-web/assets/c1/5d731017.8slo8rTF.js","/cdn/shopifycloud/checkout-web/assets/c1/f00fed33.AO25hNSx.js","/cdn/shopifycloud/checkout-web/assets/c1/94493b3a.BzxjYC5b.js","/cdn/shopifycloud/checkout-web/assets/c1/cc41c36d.BfOkjZ5z.js","/cdn/shopifycloud/checkout-web/assets/c1/99cd9b25.DrS5YA3q.js","/cdn/shopifycloud/checkout-web/assets/c1/676eb8e9.4HBTK9VT.js","/cdn/shopifycloud/checkout-web/assets/c1/6a8181a5.C196uuSb.js","/cdn/shopifycloud/checkout-web/assets/c1/0e3247a0.D5qXXS4P.js","/cdn/shopifycloud/checkout-web/assets/c1/1dbf806c.CIIZjIiX.js","/cdn/shopifycloud/checkout-web/assets/c1/a56386a6.BaUClXEC.js","/cdn/shopifycloud/checkout-web/assets/c1/e1177f6f.BorHl2Yw.js","/cdn/shopifycloud/checkout-web/assets/c1/674595ba.Dg5VUDDE.js","/cdn/shopifycloud/checkout-web/assets/c1/0d85278a.BbAPgldz.js","/cdn/shopifycloud/checkout-web/assets/c1/173d1fdf.CghSzKcs.js","/cdn/shopifycloud/checkout-web/assets/c1/16138b9e.CiVvkFcG.js","/cdn/shopifycloud/checkout-web/assets/c1/55432860.D9UT0DuV.js","/cdn/shopifycloud/checkout-web/assets/c1/0be192b6.B4A05Xta.js","/cdn/shopifycloud/checkout-web/assets/c1/2bce9289.B886dbSL.js","/cdn/shopifycloud/checkout-web/assets/c1/62a11d3e.DbPx7YZC.js","/cdn/shopifycloud/checkout-web/assets/c1/9a493f3d.CfBTL_qb.js","/cdn/shopifycloud/checkout-web/assets/c1/402b40d8.DDXbhbV_.js","/cdn/shopifycloud/checkout-web/assets/c1/0b39f19a.ovSfABi1.js","/cdn/shopifycloud/checkout-web/assets/c1/dfb65aab.D_HxoYW8.js","/cdn/shopifycloud/checkout-web/assets/c1/ee4d5c67.C02T-OVx.js","/cdn/shopifycloud/checkout-web/assets/c1/f3089cd3.CHdwmd2Y.js","/cdn/shopifycloud/checkout-web/assets/c1/e6980119.Dd9iIQFw.js","/cdn/shopifycloud/checkout-web/assets/c1/53e8828a.C4bsomZO.js","/cdn/shopifycloud/checkout-web/assets/c1/4c5b1c9e.DEZX5K3s.js","/cdn/shopifycloud/checkout-web/assets/c1/a541bc81.DOISCg3j.js","/cdn/shopifycloud/checkout-web/assets/c1/2b0d1656.DrjA1BhW.js","/cdn/shopifycloud/checkout-web/assets/c1/64c3067d.rTTcsYwJ.js","/cdn/shopifycloud/checkout-web/assets/c1/7bd337ea.B7y8Iioy.js","/cdn/shopifycloud/checkout-web/assets/c1/bbe16958.cMGCKEkv.js","/cdn/shopifycloud/checkout-web/assets/c1/4205169c.BdVDs0L-.js","/cdn/shopifycloud/checkout-web/assets/c1/35185bee.1-nkoKGT.js","/cdn/shopifycloud/checkout-web/assets/c1/542b75cf.XhGDbTAm.js","/cdn/shopifycloud/checkout-web/assets/c1/74e5a557.BC0g73Wq.js","/cdn/shopifycloud/checkout-web/assets/c1/f4d0afee.cFcbREng.js","/cdn/shopifycloud/checkout-web/assets/c1/0b704646.DfIMCtFg.js","/cdn/shopifycloud/checkout-web/assets/c1/a7ef2c81.BaHjC3Tb.js","/cdn/shopifycloud/checkout-web/assets/c1/70565d02.TxOQFd_g.js","/cdn/shopifycloud/checkout-web/assets/c1/a222330e.B6XWkDiV.js","/cdn/shopifycloud/checkout-web/assets/c1/8d7e1337.TX1RF7OZ.js","/cdn/shopifycloud/checkout-web/assets/c1/5bf177e7.DL5Uc5n_.js","/cdn/shopifycloud/checkout-web/assets/c1/f0b3b291.v8SOkXZQ.js","/cdn/shopifycloud/checkout-web/assets/c1/114cc9d1.5I__Y-xW.js","/cdn/shopifycloud/checkout-web/assets/c1/e7ae9e74.DrFGDvpL.js","/cdn/shopifycloud/checkout-web/assets/c1/abe8b5f7.BYR0fZ4d.js","/cdn/shopifycloud/checkout-web/assets/c1/91e796b6.AH5y2W_D.js","/cdn/shopifycloud/checkout-web/assets/c1/c380a132.CIZqZF92.js","/cdn/shopifycloud/checkout-web/assets/c1/3839d836.z0Y9GSJw.js","/cdn/shopifycloud/checkout-web/assets/c1/72fde58e.DMT987X0.js","/cdn/shopifycloud/checkout-web/assets/c1/8cad6ded.Fhi2ub_J.js","/cdn/shopifycloud/checkout-web/assets/c1/9e556116.C2B2hngZ.js","/cdn/shopifycloud/checkout-web/assets/c1/abf134e3._MkVPg1h.js","/cdn/shopifycloud/checkout-web/assets/c1/8e6bd8e5.fo89p5j5.js","/cdn/shopifycloud/checkout-web/assets/c1/e6a05f36.C9YLDxrX.js","/cdn/shopifycloud/checkout-web/assets/c1/71b36506.1TaSCYK5.js","/cdn/shopifycloud/checkout-web/assets/c1/a012ee00.BYgcx6QD.js","/cdn/shopifycloud/checkout-web/assets/c1/7aefefff.BnlWob1M.js","/cdn/shopifycloud/checkout-web/assets/c1/ea392d18.DVU097Al.js","/cdn/shopifycloud/checkout-web/assets/c1/b2ef26e8.BRtsk-Rg.js","/cdn/shopifycloud/checkout-web/assets/c1/99bfe9cf.BoAWrCoS.js","/cdn/shopifycloud/checkout-web/assets/c1/b290e37f.fTbXUvOK.js","/cdn/shopifycloud/checkout-web/assets/c1/3c46c6f5.COMixfVp.js","/cdn/shopifycloud/checkout-web/assets/c1/5677c11b.Weisct4a.js","/cdn/shopifycloud/checkout-web/assets/c1/e29daa9a.Bq-Qw4uf.js","/cdn/shopifycloud/checkout-web/assets/c1/b2371320.DNCm11oM.js","/cdn/shopifycloud/checkout-web/assets/c1/a735741f.DilatHlz.js","/cdn/shopifycloud/checkout-web/assets/c1/8efef14b.CL5wFZFy.js","/cdn/shopifycloud/checkout-web/assets/c1/5a1effbb.CW9tBILl.js","/cdn/shopifycloud/checkout-web/assets/c1/67e8c664.BvABP5GP.js","/cdn/shopifycloud/checkout-web/assets/c1/045c921f.BZdDQEkx.js","/cdn/shopifycloud/checkout-web/assets/c1/def19bdd.Ce9twc1B.js","/cdn/shopifycloud/checkout-web/assets/c1/bdb60128.B83EIttv.js","/cdn/shopifycloud/checkout-web/assets/c1/a0df1226.6B0DFFIb.js","/cdn/shopifycloud/checkout-web/assets/c1/5d5cabdf.g1g7EqUN.js","/cdn/shopifycloud/checkout-web/assets/c1/c1adaf81.DVorlWda.js","/cdn/shopifycloud/checkout-web/assets/c1/21162507.B34vrw6z.js","/cdn/shopifycloud/checkout-web/assets/c1/5f1fce8b.ZtxY7SSc.js","/cdn/shopifycloud/checkout-web/assets/c1/139f607b.DSjtm2yt.js","/cdn/shopifycloud/checkout-web/assets/c1/bace9a08.h4ATd8sK.js","/cdn/shopifycloud/checkout-web/assets/c1/8e2be3f2.DZdfN0Ik.js","/cdn/shopifycloud/checkout-web/assets/c1/2d034bf2.BcIQ3RQl.js","/cdn/shopifycloud/checkout-web/assets/c1/972590c9.CnVmg-L8.js","/cdn/shopifycloud/checkout-web/assets/c1/bc751930.DN6E8hJR.js","/cdn/shopifycloud/checkout-web/assets/c1/842452fd.D8pukMqG.js","/cdn/shopifycloud/checkout-web/assets/c1/a70a5b74.B9svHe1d.js","/cdn/shopifycloud/checkout-web/assets/c1/2692118b.nmc8wpcy.js","/cdn/shopifycloud/checkout-web/assets/c1/c4303b96.DDounCFJ.js","/cdn/shopifycloud/checkout-web/assets/c1/7ee3a05c.CiHzB7Lr.js","/cdn/shopifycloud/checkout-web/assets/c1/0d8691fc.oYZNyg8K.js","/cdn/shopifycloud/checkout-web/assets/c1/b0923a20.CIA63DTQ.js","/cdn/shopifycloud/checkout-web/assets/c1/7e9c6d7c.CtFFJR15.js","/cdn/shopifycloud/checkout-web/assets/c1/4bb32466.Dn-JK855.js","/cdn/shopifycloud/checkout-web/assets/c1/ed37d3c3.D5iCVfJF.js","/cdn/shopifycloud/checkout-web/assets/c1/30df5a02.DoAEtGHV.js","/cdn/shopifycloud/checkout-web/assets/c1/e32a8416.BtNNy2Pz.js","/cdn/shopifycloud/checkout-web/assets/c1/eb0f242a.C1tfhshj.js","/cdn/shopifycloud/checkout-web/assets/c1/109c16d9.LJzBJQY1.js","/cdn/shopifycloud/checkout-web/assets/c1/69f8f26d.1BScA6yS.js","/cdn/shopifycloud/checkout-web/assets/c1/e72406f8.tHoU2pIU.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.BXIamu_v.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/deferred-boot.EOVbqr2e.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.BHJbo22r.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/621ec27e44.oowFu-NJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/256cc32287.B1YSPUDc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/a50c8864f4x995b8dc6.DiwHZivn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/7188aae948xccd7bc85.CW2HhXMu.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/90ea855f49.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6e3faf45e1x0e0212c9.ct4xfivv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/04c08e5c0e.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6e3faf45e1.Du9dByaI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/5caf6ce603.87JMHPUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/65db0eadda.qa_ACxP4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/966e3f4d79.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d4951797f3.UDCqXpbq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/df684aa9a8.CIs_ZowJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/f2a87b867b.Cl0Eyn3N.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/37e1a3659dx995b8dc6.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/df684aa9a8xbaeb52f9.DvPZalXI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/0fde071d7ex9f0ef4a6.B0RErzdh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/605b2a80c9xbaeb52f9.BAjucZ-8.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/4d60858badxb036935a.xO_7ctnq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/5a34f22f1a.D7MQTDGO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e8404cbaefxc1eab701.B68J3GgF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/7aa3c6599b.C5b9n-0_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e07f74760d.DU0m5rdF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e07f74760dxbaeb52f9.4dSOKuBa.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6559bc5a39x1573b800.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/89f3b0bff6.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/81ca749d51x11e90a44.BKRoWsh4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x11e90a44.DqwdjT1Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x670d76d4.BbxB_6wt.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x03fe6ed3.CVKcAbIN.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96xd17a0c7b.BULdn7yC.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/343ea67e0bx11e90a44.s-Kd_X2E.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/bde15ff106x11e90a44.ak5YUtDE.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/04e578408ax11e90a44.CbGDlw5K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/04e578408ax6d8a6990.eanpcn-r.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d34ebf45edx11e90a44.btyKOfco.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/401ac968b4x11e90a44.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/500596e378xe1c30c9c.CyQZvZOO.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  