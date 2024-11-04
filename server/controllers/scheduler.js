const ScheduledExpiration = require('../models/expiryScheduleModel'); // Adjust the path as necessary
const authModel = require('../models/authModel'); // Adjust the path to your auth model
const Service = require('../models/serviceModel'); // Adjust the path to your service model
const { serviceExpiredEmail } = require('../template/expiryService');
const moment = require("moment");
const mailSender = require('../utils/mailSenderr');

const checkExpiredServices = async () => {
  try {
    const currentDate = new Date();
    // , sentEmail: false
    const expirations = await ScheduledExpiration.find({ expirationDate: { $lt: currentDate } });

    for (const expiration of expirations) {
      const user = await authModel.findById(expiration.user);
      const service = await Service.findById(expiration.service);
      
      if (user && service) {
        // Send an expiration email
        const formattedExpirationDate = moment(expiration.expirationDate).format('dddd, MMMM Do YYYY, h:mm:ss A');
       
          await mailSender(
            user.email,
            "TradeGyan Solutions",
            serviceExpiredEmail(user.name,service.serviceName,formattedExpirationDate)
          );
        
        // Mark email as sent
        expiration.sentEmail = true;
        await expiration.save();
      }
    }

    // Optionally, delete sent expirations
    // await ScheduledExpiration.deleteMany({ sentEmail: true });

    console.log('Checked and updated expired services.');
  } catch (error) {
    console.error('Error checking for expired services:', error);
  }
};

// Schedule the job to run every day at midnight


module.exports = checkExpiredServices; // Export the function if needed

