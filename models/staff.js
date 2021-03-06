// load the mongoose driver
var mongoose = require('mongoose');

var StaffSchema = mongoose.Schema({
  name: String,
  avatar: String,
  contact: {
    email: String,
    phone: {type: Number, default: ""},
    mobile: {type: Number, default: ""},
    ext: String,
  },
  organisation: {
    team: String,
    role: String
  },
  work_schedule: {
    'monday':false,
    'tuesday':false,
    'wednesday':false,
    'thursday':false,
    'friday':false,
  },
  status: {
    in: {type: Boolean, default: false},
    duty_worker: {type: Boolean, default: false},
    notes: {type: String},
    return_date: {type: Date}
  },
  last_updated: {type: Date, default: new Date()}
});

var Staff = mongoose.model('Staff', StaffSchema);
module.exports = Staff;
