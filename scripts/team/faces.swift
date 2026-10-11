// Prints the largest face rectangle in each image as: file x y w h (pixels, origin top-left).
// Usage: swift faces.swift img1.jpg img2.jpg ...
import Foundation
import Vision
import AppKit

for path in CommandLine.arguments.dropFirst() {
    guard let img = NSImage(contentsOfFile: path),
          let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else { print(path, "unreadable"); continue }
    let req = VNDetectFaceRectanglesRequest()
    try? VNImageRequestHandler(cgImage: cg, options: [:]).perform([req])
    let W = Double(cg.width), H = Double(cg.height)
    guard let f = (req.results ?? []).max(by: { $0.boundingBox.width < $1.boundingBox.width }) else { print(path, "noface"); continue }
    let b = f.boundingBox
    print(path, Int(b.minX * W), Int((1 - b.maxY) * H), Int(b.width * W), Int(b.height * H), cg.width, cg.height)
}
