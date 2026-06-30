from ultralytics import YOLO

def main():
    model = YOLO("runs/detect/experiments/xray_v1-3/weights/last.pt")

    model.train(
        data="datasets/xrays/data.yaml",

        # Training
        epochs=20,
        imgsz=640,
        batch=16,
        device=0,
        workers=4,

        # Optimization
        optimizer="auto",
        patience=20,
        cache=False,

        # Project
        project="experiments",
        name="xray_v1",

        # Outputs
        save=True,
        plots=True,
        verbose=True
    )

if __name__ == "__main__":
    main()