var mongoose=require('mongoose');
var empNew_v4=mongoose.model("empNew_v4",{"empNew_v4":[{"name":{"type":"String","control":"text","pattern":"","required":"on"},"age":{"type":"Number","control":"text","pattern":"","required":"on"},"dOB":{"type":"Date","control":"text","pattern":"","required":"on"},"Email":{"type":"String","control":"text","pattern":"(?:%5Ba-z0-9!#$%25&'*+/=?%5E_%60%7B%7C%7D~-%5D+(?:%5C.%5Ba-z0-9!#$%25&'*+/=?%5E_%60%7B%7C%7D~-%5D+)*%7C","required":"on"}}],"instanceId":{"type":"String"}});
module.exports={empNew_v4}