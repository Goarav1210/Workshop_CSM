const { setValue } = require('../utils/common');
const cds = require('@sap/cds');
const metadata = require('../utils/metadata');
const { createError } = require('../handlers/createErrorLogHandler');

module.exports = cds.service.impl(function () {

    this.on("RybXHYhRMAVoQfdA", async (req) => {
      let tx;
      try {
          let result , UnionCode='';
          let payload = req.data;
          console.log('Incoming Payload:', payload);
          let oInput;
          oInput = JSON.parse(payload.FXPUWMCJEKALGSTV);
          let oCase = oInput.CPM_T_CASE;
          console.log('Extracted Union Object:', oCase);
        
          tx = cds.transaction(req);
    
              result = await tx.run('CALL "prCreateUpdateCase"(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                      setValue(oCase.CSEID),
                      setValue(oCase.CSENO),
                      setValue(oCase.CMPID),
                      setValue(oCase.CMPNM),
                      setValue(oCase.CMPPN),
                      setValue(oCase.CMPCN),
                      setValue(oCase.CMPJT),
                      setValue(oCase.CMDPT),
                      setValue(oCase.CMDIV),
                      setValue(oCase.CMPEM),
                      setValue(oCase.SUPNM),
                      setValue(oCase.SUPID),
                      setValue(oCase.POLCY),
                      setValue(oCase.CNFRS),
                      setValue(oCase.BHALF),
                      setValue(oCase.SUBNM),
                      setValue(oCase.SUBID),
                      setValue(oCase.SUBCN),
                      setValue(oCase.SUBEM),
                      setValue(oCase.CTEMP),
                      setValue(oCase.CASTS),
                      setValue(oCase.VIWNM),
                      setValue(oCase.REWNM),
                      setValue(oCase.REWID),
                      setValue(oCase.ISDRAFT),
                      setValue(oCase.ISDEL),
                   );
              CaseId = oCase.CSEID;

              console.log('Stored Procedure Result:', result);
             
          await tx.commit();
    
      } catch (error) {
 
          if (tx) {
              await tx.rollback();
          }
          return req.error({
              code: 500,
              message: error.toString()
          });
      }
    });

 

      
})