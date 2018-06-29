module.exports = (mongoose) => {
    const { Schema } = mongoose;

    const TaskSchema = new Schema(
        {
          task: String
        }, {
          timestamps: true,
        });
    
        mongoose.model('Task', TaskSchema, 'tasks');
}
