

const Modal = () => {
    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">


            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Send Feedback!</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Feedback message</span>
                    </label>
                    <textarea name="feedback" id="" cols="30" rows="10" className="p-2 input input-bordered" ></textarea>
                </div>

                <div className="form-control mt-3">
                    <input type="submit" value="Send Feedback" className="btn bg-blue text-neutral-100" />
                </div>

                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </div>
            </form>
        </dialog>
    );
};

export default Modal;